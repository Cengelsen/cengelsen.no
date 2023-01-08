+++
title = "How to configure LXD to run locally"
date = "2022-07-24"
tags = ["Instruction", "Virtualization"]
categories = ["Coding"]
description = "An instruction on how to set up LXD locally for virtualization."
+++

## What is LXD? 
LXD is a CLI service for managing and operating virtual machines and containers. LXD is written in Go and is licensed under the Apache2 license. LXD can be divided into LXD (Linux Daemon) and LXC (Linux Containers). LXC is the software that enables the creation of virtual machines and containers. LXD is built on top of LXC, and supposedly improves LXC with better security, scalability, ease of use, and processing cost. Another small difference is that LXC uses the C API, while LXD uses the REST API.

LXD can also [be integrated into other platforms and tools](https://linuxcontainers.org/lxd/third-party-integrations/), such as. Ansible, Terraform and Juju. 

Before installing it locally, you can also [try a demo of it here](https://linuxcontainers.org/lxd/try-it/)! 

## Purpose of this instruction 

This instruction aims to guide you to install and configure LXD so that you can use LXD on-premises for easy virtualization. Following this instruction, you should be left with an LXD environment where you can create new containers, start and stop them and delete them, as well as allowing these containers to communicate with each other. There are, of course, more advanced things one can do with LXD, but that's not covered here.

## Dependencies 

If you install it through Snap, it's recommended to have at least 2GB of RAM. Besides that, it is also recommended that a ZFS file system is used as the "storage pool" for LXD. If so, LXD requires you to have installed `zfsutils-linux`. 

One also relies on the mother card and processor to support virtualization. 

## Installation 
### Snap 

LXD is available for download and installation through Snap. If you have Snap, you can run ''snap install lxd`. Since Ubuntu 20.04, LXD is already installed, as a Snap package, after a fresh installation of Ubuntu. 

Installation of Snap itself may vary between different systems. A guide for different systems [can be found here](https://www.ubuntupit.com/how-to-install-snap-package-manager-in-linux-distributions/).

### Manually 

Since LXD comes pre-installed with Ubuntu, I only had to think about configuration. 

On many operating systems, Snap doesn't come with a fresh install, but one doesn't have to use Snap to install it. [Here's an overview](https://linuxcontainers.org/lxd/getting-started-cli/) for installation on a few different systems without Snap.

## Configuration 
### User rights 

Add your user to the lxd group.: 

''sudo adduser <name of user> lxd` 

you can confirm by typing `id -nG`. If lxd is in that list, the user has lxd rights. 

### Storage space 

Before initializing LXD, it's important that you've set aside the storage space you want to use. LXD creates a ZFS pool on the dedicated storage you've set aside, so you don't have to worry about ZFS configuration on Advance.

### Initialization 

If it is the first time LXD is running on the machine, one must first initialize with `lxd init`. In this process, you get a series of questions to configure the storage space that LXD will use. They are as follows:

```sh
Do you want to configure a new storage pool? (yes/no) [default=yes]: yes
Name of the new storage pool [default=default]: <velg navn>
Name of the storage backend to use (btrfs, dir, lvm, zfs) [default=zfs]: zfs
Create a new ZFS pool? (yes/no) [default=yes]: yes
Would you like to use an existing block device? (yes/no) [default=no]: yes
Path to the existing block device: path/to/storage/device/<name of storage device>
```

After that, storage setup is done. 

### Network 

In the same initialization, the LXD network is also configured. In the same style as instead, you get a series of question. They are as follows:

```sh
Would you like to connect to a MAAS server? (yes/no) [default=no]: no
Would you like to create a new local network bridge? (yes/no) [default=yes]: yes
What should the new bridge be called? [default=lxdbr0]: lxdbr0
What IPv4 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: auto
What IPv6 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: auto
```

This allows for the following properties: 

- Each container is automatically assigned a private IP address. 
- Each container can communicate with each other over the private network. 
- Each container can initiate contact with the internet 
- Each container remains inaccessible from the internet. A contact CANNOT be initiated from the internet to reach the container.

### Miscellaneous 

You also get 3 questions about miscellaneous things:

```sh
Would you like LXD to be available over the network? (yes/no) [default=no]: no
Would you like stale cached images to be updated automatically? (yes/no) [default=yes] yes
Would you like a YAML "lxd init" preseed to be printed? (yes/no) [default=no]: no
```

After this, a script runs in the background. If you don't get any feed, that's normal. 

## Managing containers 

Although the service is called LXD, you use the command `lxc` to communicate with the LXD Hypervisor 

### See overview 

To list all the containers you have, type ''lxc list''. To see the list of available commands, type `lxc -h`. 

### Create a container 

To create a new container, type `lxc launch <name of OS>:<version number> <name of container>`. If you want to create a container with ubuntu 20.04 and named *webserver*, type ''lxc launch ubuntu:20.04 webserver`. This is going to create and start the container.

Technically, <name of OS> is the identifier for the preconfigured list of LXD image files. <version number> is the name of the image file. 20.04 is short for Ubuntu 20.04. 

To see a complete list of available image files, type ''lxc image list images:`. You can also limit the list to just Ubuntu, by typing `lxc image list ubuntu:`'. You can extract info about the image file by typing `lxc image info <name of os>:''<OS version> ''. 

### Start/stop/delete a container 

Start the container: `lxc start `. Stop the container: `lxc stop `. Delete container: `lxc delete `. 

### Give a container static IP address 

LXD has a built-in DHCP server and can assign a random IP address to any container. The initial The IP address persists even if the container is rebooted. This is how to assign a static IP address to a container.

Overwrite the current NIC: 

`lxc config device override ` 

Give the container the static IP address and reboot: 

`lxc config device set <name of container> <name of NIC> ipv4.address <ip-address>''

`LXC restart <name of container>`

## Expose the container to the internet 

After all this configuration, it is still not possible to access the container from the internet. Therefore, you must create an iptables rule so that network traffic is forwarded to the container. 

This requires 2 things: Your public IP address and the container's IP address. 

### Installing Nginx 

A good way to test if you have achieved the iptables rule is to install Nginx in the container. First you have to get into Container. This can be done by typing `lxc shell <name of container>`. Then you "ssh" into the container. You can also type `lxc exec <name of container> -- sh -c "<set of commands>" ` if you only want to execute commands in Container. Next, install Nginx in the conventional way for the OS you have chosen. for Ubuntu, it just becomes:

```sh
apt-get update && apt-get install nginx
```

### Open to network traffic 

This step is quite dependent on your local network configuration, but if you don't have any special network configurations, this should work:

```sh
PORT=80 PUBLIC_IP=<public IP-address> CONTAINER_IP=<container IP-address> IFACE=<name of NIC> \
sudo -E bash -c 'iptables -t nat -I PREROUTING -i $IFACE -p TCP -d $PUBLIC_IP \
--dport $PORT -j DNAT --to-destination $CONTAINER_IP:$PORT -m comment --comment "<some comment>"' \
```

Explanation: 

- `t nat` specifies that you should use the NAT table for address translation 
- `-I PREROUTING` specifies that you add the rule to the link called "PREROUTING"
- `-i $FACE` specifies the NIC to use 
- `-p TCP` specifies that the TCP protocol should be used 
- `-d $PUBLIC_IP` specifies the IP address that is the destination of the rule 
- `--dport $PORT` specifies the port that is the destination of the rule
- `-j DNAT` specifies that you should perform a "jump" to destination NAT (DNAT)
- `-to-destination $CONTAINER_IP:$PORT` specifies that the request should be sent to the container's IP address on the specific port.
For å se en nummerert liste over reglene, kan du skrive ```sudo iptables -t nat -L PREROUTING --line-numbers```.

These rules must be applied again every time you restart the machine. Pretty boring. So then you can install `iptables-persistent` package. Then the rules are applied automatically every time you restart the machine. 

To remove an IP table rule, you can type `sudo iptables -t nat -D PREROUTING <number of rule>`. In addition You should save the change by typing `sudo netfilter-persistent save`. Then the rule is not reapplied again at the next omstaAdditionally

## TL;DR

Installing and Configuring LXD on an Ubuntu 20.04

1. ```sudo apt-get update && sudo apt-get upgrade```
2. ```sudo adduser <username> lxd```
3. ```sudo apt-get install -y zfsutils-linux```
4. ```sudo lxd init```
  - no
  - yes
  - <name of storage pool>
  - zfs
  - yes
  - yes
  - /path/to/<name of storage device>
  - No
  - yes
  - lxdbr0
  - auto
  - auto
  - no
  - yes
  - no
1. ```lxc launch <os-name>:<os-version> <container-name>```
2. ```lxc config device override <container-navn> <NIC-name>```
3. ```lxc config device set <container-navn> <NIC-name> ipv4.address <container IP-address>```
4. ```lxc restart <container>```
5. ```lxc exec <container-name> -- sh -c "apt-get update && apt-get upgrade && apt-get install nginx"```
6.  ```PORT=80 PUBLIC_IP=<public IP-address> CONTAINER_IP=<container IP-address> IFACE=<name of NIC>  sudo -E bash -c 'iptables -t nat -I PREROUTING -i $IFACE -p TCP -d $PUBLIC_IP --dport $PORT -j DNAT --to-destination $CONTAINER_IP:$PORT -m comment --comment "<some comment>"'```
7.  ```sudo apt-get install iptables-persistent```
8.  profitt

### Shell-script

Create and start a new container

```sh
#!/bin/sh

lxc list --columns ns4

read -p "Name of OS? 'OS:version':" "osName"
read -p "Name of container?:" "containerName"
read -p "IP of container?:" "containerIP"
read -p "Name of NIC:" "nicName"
read -p "Servers public IP-address?:" "publicIP"
read -p "Port to receive network traffic?:" "portNr"

lxc launch $osName $containerName

lxc config device override $containerName $nicName
lxc config device set $containerName $nicName ipv4.address $containerIP

lxc restart $containerName

read -p "Forward incoming connections to container? [yes/no]:" "fwdTraffic"

if [ $fwdTraffic = "yes" ]; then

        read -p "Comment for Ip-table rule?:" "iptComment"

        PORT=$portNr PUBLIC_IP=$publicIP CONTAINER_IP=$containerIP IFACE=$nicName \
        sudo -E bash -c 'iptables -t nat -I PREROUTING -i $IFACE -p TCP -d $PUBLIC_IP \
        --dport $PORT -j DNAT --to-destination $CONTAINER_IP:$PORT -m comment --comment "$iptComment"'
	sudo netfilter-persistent save
	echo "Added rule to IP-table. The container is now ready."
else
        echo "Skipped forwarding network traffic. The container is now ready."
fi
```

## (Optional) Installing LXDUI 

I haven't tried it myself yet, but will update this instruction once I've implemented it. You can also install a visual user interface in your browser, with [This GitHub project](https://github.com/AdaptiveScale/lxdui/wiki).

## Kilder

Ser du noe galt med denne instruksjonen? [Opprett en pull request!](https://github.com/Cengelsen/cengelsen.no)

- [How to install and Configure LXD on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-lxd-on-ubuntu-20-04), sist lest 24.07.2022.

- [LXD > Getting started > Installation](https://linuxcontainers.org/lxd/getting-started-cli/), sist lest 24.07.2022

- [Difference between LXC and LXD](https://www.geeksforgeeks.org/difference-between-lxc-and-lxd/), sist lest 25.07.2022
- [Comparing LXD vs. LXC](https://discuss.linuxcontainers.org/t/comparing-lxd-vs-lxc/24), sist lest 25.07.2022
