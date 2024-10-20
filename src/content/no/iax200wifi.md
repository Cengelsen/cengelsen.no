---
title: Utkast til blogg-post
date: 2024-10-18
description: lorem ipsum
---

Opprinnelig reddit post:

There are a slew of bugs open on the kernel.org bugzilla for this issue , and alas I don't recall my source for this information, but my understanding is that this bug happens AX200/201/210(?) Wifi 6 Linux iwlwifi drivers. This may be a good place to start:

https://bugzilla.kernel.org/show_bug.cgi?id=203709

In a nutshell, the bug is technically due to the way that Wifi 6 access points (in my case Netgear WAX210/630) handle beacons. The kernel developers involved seem to concur that the iwlwifi implementation is technically correct, so they have not attempted to fix things on the driver side (as far as I know). That said, the Windows drivers have been updated to compensate for this access point bug b/c they correctly recognize that users rarely have control over the AP they are connecting to.

With that said, the best solution that I have found is to disable the 802.11ax standard in iwlwifi so that my Linux laptops connect using 802.11ac, which is still fast. The 802.11ac connection is stable all day long. So, if you're desperate, try this:

```
~$ sudo su -
~$ touch /etc/modprobe.d/iwlwifi.conf
~$ echo "options iwlwifi disable_11ax=Y" >> /etc/modprobe.d/iwlwifi.conf
~$ reboot

```

This has worked for me on both Arch Linux and Ubuntu 22.04. Hope that helps.

