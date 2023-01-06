+++
title = "Nginx as reversed proxy in LXD"
date = "2022-09-11"
tags = ["Instruction"]
categories = ["Coding"]
description = "An instruction on how to rig Nginx as a proxy server in LXD."
+++

## Dilemma

What I want to do is have a common container that handles all the "reverse proxy" redirection and SSL termination for all the other containers on the server. I want to use Nginx for this Purpose.

## Explanation

It might be a little hard to imagine what the logistics of it will be like. What you hope left by this instruction is one LXD container that acts as an Nginx proxy server, and At least one LXD container that retains the service you wish to expose to the internet. The point, then, is that The proxy server receives all requests from the Internet and forwards the traffic to the container that keeps on service. Both the proxy container and the service container both run an instance of Nginx who "communicate" with each other to direct web traffic correctly.

## Installing and configuring LXD

This instruction assumes that you have installed and configured LXD on your server. You can [follow my instructions]({{ relref path="lxd-instruks.md" lang="en" }}) to do so.

Once this is done, then you need to create "devices" for the proxy container. Outside the proxy container, you need to run:

```bash
lxc config device add *name_of_container* *name_of_unit* proxy listen=tcp:0.0.0.0:80 connect=tcp:127.0.0.1:80 proxy_protocol=true

lxc config device add *name_of_container* *name_of_unit* proxy listen=tcp:0.0.0.0:443 connect=tcp:127.0.0.1:443 proxy_protocol=true
```

This is what the various parameters mean:

| Parameter                               | Explanation                                                                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _name_of_container_                     | The name of the proxy container                                                                                                                                                             |
| _device_name_                           | The name of the "device" you are creating                                                                                                                                                   |
| proxy                                   | What type of device you are creating                                                                                                                                                        |
| listen= tcp:0.0.0.0:80                  | The proxy device should listen on the host on port 80, protocol TCP, on all interfaces                                                                                                      |
| connect= tcp:127.0.0.1:80 &nbsp; &nbsp; | The proxy device should connect to the container on port 80, protocol TCP, on the loopback interface. It is not possible to type "localhost", only the IP address, in LXD versions >= 3.13. |
| proxy_protocol                          | Requests to enable the proxy protocol, so that the reverse proxy obtains the original IP address from the proxy device                                                                      |

Om du vil fjerne proxy-enheten, kan du skrive:

`lxc config device remove *navn_på_container* *navn_på_enhet*`

## Installing Nginx

How you install Nginx varies depending on which system you use. [Here is an instruction on how to install Nginx on different systems](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/).

## Configuring Nginx in the service container

Some configuration is needed for the Nginx running in the service container. Create `/etc/nginx/conf.d/real-ip.conf` in the service container:

```sh
real_ip_header X-Real-IP;
set_real_ip_from *navn_på_proxy_container*.lxd;
```

Create an Nginx config, `/etc/nginx/sites-available/*config-name*`, in the service container:

```sh
server {
        listen 80;
        listen [::]:80;

        server_name *domain-name*;

        root /path/to/website/folder;
        index index.html;

        location / {try_files $uri $uri/ =404;
        }
}
```

This configuration file may vary depending on the service's requirements for the Nginx configuration. The example above is for serving a static web page. Here, SSL termination is not needed, since the proxy server handles it.

## Configuring Nginx in the proxy container

Create an Nginx config, `/etc/nginx/sites-available/*config-name*`, in the proxy container:

```sh
server {
        listen 80 proxy_protocol;
        listen [::]:80 proxy_protocol;

        server_name *domain-name*;

        location / {
                include /etc/nginx/proxy_params;

                proxy_pass http://*name_of_service_container*.lxd;
        }

        real_ip_header proxy_protocol;
        set_real_ip_from 127.0.0.1;
}
```

Get SSL security through Certbot. This is a procedure in Ubuntu 20.04:

1. `lxc shell *proxy_container_name*`
2. `sudo add-apt-repository ppa:certbot/certbot`
3. `sudo apt-get install certbot python-certbot-nginx`
4. `sudo certbot --nginx`

- Agree
- No
- _choose correct domain_
- 2 (Redirect)

5. Change the new lines in the nginx config to look like this:

```
listen 443 ssl proxy_protocol; # managed by Certbot
listen [::]:443 ssl proxy_protocol; # managed by Certbot
```

6. `sudo systemctl restart nginx`

## Kilder

1. [A Beginner's Guide to LXD: Setting Up a Reverse Proxy to Host Multiple Websites](https://www.linode.com/docs/guides/beginners-guide-to-lxd-reverse-proxy/), last read 12.09.2022.
2. [Nginx > Tutorials > Install](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/), last read 12.09.2022.
