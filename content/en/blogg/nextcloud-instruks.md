+++
title = "Nextcloud, Snap and Nginx reversed proxy"
date = "2022-09-11"
tags = ["Instruction"]
categories = ["Coding"]
description = "An instruction on how to run Nextcloud installed through Snap behind an Nginx reverse proxy."
+++

## What is Nextcloud? 

Nextcloud is an open source cloud storage alternative to Dropbox and Google Drive. You can run it locally on your own machine, Which means you're in control of your files at all times. With Nextcloud Hub, they aim to have one intregret solution for file storage, file sharing, preiketjenester, email services and document collaboration. In addition, it is also possible to install various apps into the Your Nextcloud installation. Although they started in 2016, they estimate that there are now over 400,000 Nextcloud machine servers online.

## Explanation of problem statement 

In my search for answers on the internet, I am left with the impression that this combination of configuration is not common. Therefore, I will try to be as clear as possible, to prevent confusion and that you waste your time. What I want to explain in this instruction is how to run a Nextcloud instance, installed and configured through Snap, behind an Nginx proxy server. So the proxy server takes care of the SSL security, while the service server takes care of everything else Nginx-related.

If you have configured an Nginx proxy server as described in [my proxy instructions]( {{ relref path="proxy-instruks.md" lang="en" }} ), then you now have two virtual machines; one virtual machine running Nginx as a proxy and one virtual machine running nginx as a "regular" web server. On the machine running a "ordinary" web server, then Nextcloud should also run. The problem is then that Nextcloud must communicate correctly with its local "ordinary" web server, and that the "ordinary" web server must communicate correctly with the proxy server so that I can reach the nextcloud service by going to *https://example.domain.com*.

## Prerequisites 
1. The ability to install Snap. 
2. 64bit CPU and 64bit OS are recommended. 
3. At least 128MB RAM per process, but 512MB RAM per process is recommended. 
4. Nginx is configured as reverse proxy, [such as described here]({{relref. path="/proxy-instruction.md" lang="en" }}). 
 
## Install Snap 

Installation of Snap itself may vary between different systems. A guide for different systems [can be found here](https://snapcraft.io/docs/installing-snapd). 

## Installing Nextcloud 

There are other ways to install Nextcloud that don't involve Snap, but here the point is that Nextcloud is installed through Snap. Once you have Snap, you can follow these steps: 

1. `sudo snap install nextcloud` 
2. `sudo sudo nextcloud.manual-install *sudouser* *password*`

## Configuring Nextcloud 

In order for Nextcloud to communicate with Nginx correctly, some Nextcloud configuration is needed. You need to do the following: 

1. `sudo snap stop nextcloud`
2. Open the configuration file of nextcloud. For Ubuntu 20.04, it will be `/var/snap/nextcloud/31222/nextcloud/config/config.php`.
3. Add these lines to the bottom of the file:

```
'overwritehost' => 'example.domain.com',
'overwriteprotocol' => 'https',
'overwritewebroot' => '/',
```

also change `'trusted_proxies'` to look like this:

```
'trusted_proxies' =>
  array (
    0 => '*Proxy-server IP*',
  ),
```

If you don't have the `trusted_proxies` variable, you'll need to add it too. 

It is also mentioned in many places on the web that you need to change the `overwrite.cli.url` variable to be `https://example.domain.com`, but I have it standing as it is, namely `https://localhost`.

1. `sudo nextcloud.disable-https`
2. `sudo snap set nextcloud ports.http=*free port*`. The same is possible for https: `sudo snap set nextcloud ports.https=*free port*`
3. `sudo snap start nextcloud` Then nextcloud has all the necessary configuration to be able to communicate with nginx. 
 
## Configuring Nginx 

In this case, the required configuration on both the Proxy server and the service server is required in advance for the configuration below to work. I am referring to the reservation that this instruction makes, which I mentioned earlier. 

Nginx-config on Proxy Server:

```bash
server {

        server_name *domain name*;

        location / {
                include /etc/nginx/proxy_params;

                proxy_pass http://*nextcloud-servers IP-address*/; # In LXD, you can also just type *container name*.lxd

        }


        real_ip_header proxy_protocol;
        set_real_ip_from 127.0.0.1;



    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/*example.domain.com*/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/*example.domain.com*/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = *example.domain.com*) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

        listen 80 proxy_protocol;
        listen [::]:80 proxy_protocol;

        server_name *example.domain.com*;
    return 404; # managed by Certbot


}
```

Nginx-config on the Nextcloud-server:

```bash
server {

        listen 80;
        listen [::]:80;

        server_name *example.domain.com*;

        location / {
                proxy_pass_header   Server;
                proxy_set_header    Host $host;
                proxy_set_header    X-Real-IP $remote_addr;
                proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header    X-Forwarded-Proto $scheme;
                proxy_pass          http://127.0.0.1:*nextcloud.http-port*;
        }
}
```

## Kilder

1. [Putting the snap behind a reverse proxy](https://github.com/nextcloud-snap/nextcloud-snap/wiki/Putting-the-snap-behind-a-reverse-proxy), last read 11.09.2022.
2. [How To Install and Configure Nextcloud on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-nextcloud-on-ubuntu-20-04), last read 11.09.2022.
3. [Nextcloud configuration > Reverse proxy](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/reverse_proxy_configuration.html), last read 11.09.2022.
4. [Setting up Nextcloud behind https nginx proxy](https://www.vanwerkhoven.org/blog/2021/setting-up-nextcloud-behind-https-nginx-proxy/), last read 11.09.2022.
