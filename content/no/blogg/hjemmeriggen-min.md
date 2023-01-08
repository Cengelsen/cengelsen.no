+++
title = "Hjemmeriggen min"
date = "2022-06-15"
tags = [""]
categories = ["Oversikt"]
description = "En beskrivelse av opprigget på min hjemmeserver."
+++

Dette er en oversikt av hjemmeriggen min. Etterhvert som jeg endrer hjemmeriggen min, kommer denne
posten til å bli oppdatert.

## Maskinvare

Jeg bruker en [ASUS PN50 Barebone Ryzen 5 4500U](https://www.komplett.no/product/1162285?noredirect=true) 
med en [Kingston A2000 1TB NVMe M.2 SSD](https://www.komplett.no/product/1135886?noredirect=true) for
lagring. Til RAM har bruker jeg 2 brikker 
[HyperX Impact DDR4 2933MHz 16GB](https://www.komplett.no/product/1141337?noredirect=true). 

## Programvare

Maskinvaren kjører Ubuntu 20.04 og har ingen spesielle konfigurasjoner.

## Tjenester

### LXD-virtualisering

For å separere alle tjenestene som kjører på maskintjeneren, bruker jeg [LXD](https://linuxcontainers.org/lxd/) 
for å virtualisere ulike miljøer. Foreløpig bruker jeg bare Ubuntu 20.04 på alle VM'ene.

Jeg har skrevet en instruksjon på hvordan du kan installere LXD på din egen maskin. [Den kan du finne her](/blog/lxd-instruks)

### Nginx reverse proxy

For å eksponere tjenestene til internett, bruker jeg en sentral Nginx reverse proxy som 
håndterer all trafikken for hver VM som verter en tjeneste. I tillegg har jeg konfigurert
den til å sørge for automatisk SSL-sikring for hvert domene. Reverse proxy kjører Nginx i en
VM som kjører foran nginx i de andre VM'ene, og videresender trafikken til hver VM basert på
domene-navnet.

[Jeg har skrevet en instruks på det også](/blog/proxy-instruks).

### Hjemmesiden

Nettsiden som denne posten kommer fra, cengelsen.no, er åpen kildekode og [er å finne her](https://github.com/Cengelsen/cengelsen.no). Nettsiden kjører i Hugo og bruker for 
øyeblikket et ferdiglaget tema som heter "mero". Mero er splittet fra det opprinnelige repoet,
så det man ser på nettsiden er mero med mine endringer.  

### Postreceiver

For å slippe å ssh'e inn på serveren min og manuelt dra ned forandringer og bygge siden på nytt, 
har jeg skrevet [dette scriptet](https://github.com/Cengelsen/postreceiver) slik at siden bygges 
automatisk etter at jeg dytter lokale forandringer til github-repoet. 

Koden kjører i bakgrunnen på samme VM som holder og serverer nettside-filene. Den lytter konstant
etter POST-payloads, addressert til en spesfikk slug på nettsiden. Den verifiserer deretter
om den kommer fra github-repoet mitt. Om verifiseringen er vellykket, kjører den et lokalt script
som bygger nettsiden. 

### Nextcloud

For å kunne unngå å lene meg på andre utenlandske selskaper, som Google eller Microsoft, for skylagring, bruker jeg [Nextcloud](https://nextcloud.com/athome/). Den er installert lokalt i en egen
VM, installert gjennom Snap.

Nextcloud-instansen kjører bak Nginx-proxy'en min, [hvilket jeg forklarer her](/blog/nextcloud-instruks). 