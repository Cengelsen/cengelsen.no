+++
title = "Vi Burde Alle Abonnere På Kalendere"
date = "2024-02-26"
tags = []
categories = ["Mening"]
description = ""
+++

Du leste riktig! Vi burde alle sammen abonnere på kalenderstrømmer. I det siste har jeg blitt litt fascinert av å kunne importere hendelser fra andres kalendere inn i min egen. Dette kom fra ønsket om å finne diverse arrangementer som jeg kunne delta på utenom det de vanlige i rutinen min. 

Jeg søkte derfor igjennom alle mulige arrangementsverter i byen min for å se hvilke arrangementer de tilbydde ut halvåret. Dette tok overraskende lang tid. 

### Hvordan er situasjonen nå?

Nå vet jeg ikke hvordan det er i din by, men Bergen er ikke særlig oversiktlig når det gjelder å finne diverse arrangementer som skjer rundt i byen. Det er ikke ett sentralt sted hvor en kan hente ut absolutt alle arrangementer som skjer. De ulike typene arrangementer, er spredd ut på en go del forskjellige nettsider. 

De aller fleste arrangementsverter har en egen nettside, hvor de legger ut arrangementsdetaljer, men ikke alle. De som ikke har egen nettside, legger bare ut arrangementsinformasjonen på Facebook :nauseated_face: eller Instagram :vomiting_face:, hvilket ikke er idéelt for meg.

Arrangementsvertene bruker tjenester som [Ticketmaster for Bergen](https://www.ticketmaster.no/city/bergen/40500), [TicketCo for Bergen](https://ticketco.events/no/nb/m?pattern=bergen), [Bergenlive](https://www.bergenlive.no/konsertkalender/), [Studentbergen](https://www.studentbergen.no/studentkalender) og [Meetup for Bergen](https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&sortField=DATETIME&location=no--Bergen) for å legge ut arrangementsinformasjon i tillegg til sin egen side. [Det Akademiske Kvarter](https://kvarteret.no/events) er et eksempel på en side som henter ut en liste av alle arrangementer fra studentbergen, hvor lokalet er Det Akademiske Kvarter. 

Det er noe overlapp mellom et par av nettsidene, men ikke helt. Så om en vil finne alle aktuelle arrangementer, må en gå fra nettside til nettside og lete. Ingen av disse nettsidene nevnt over, utenom TicketCo, har en måte å laste ned en `.ics`.-fil som jeg kan importere inn i kalenderen min. Viktigst av alt; de har ikke en måte å abonnere på arrangementer.

**NB**: *Jeg legger ved en liste over alle aktuelle arrangementsverter jeg fant under [Arrangementsverter](#arrangementsverter).*

### Hva er problemet?

Problemet er hovedsakelig at det er tidkrevende og kronglete å finne de arrangementene jeg vil gå på. For hvert arrangement jeg finner, må jeg, i min egen kalender, opprette ny hendelse, skrive inn tittel, skrive inn beskrivelse, velge start-tidspunkt, velge slutt-tidspunkt, velge riktig kalender-merkelapp, lagre, gå til neste arrangement og gjenta. 

Snork og dobbelsnork! Skal det virkelig forventes av meg i den kommende KI-æraen at jeg skal gjøre noe som helst manuelt?

Ikke bare det, men det er 100% mulig for en arrangementsvert å endre detaljene på en hendelse etter at jeg har manuelt lagt det inn i kalenderen min. Så da må jeg regelmessig verifisere i ettertid at ingenting har forandret seg i hendelsen. 

For eksempel, ved [Bergens Offentlige Bibliotek](https://bergenbibliotek.no/) skulle de vise en film, kalt [Det Syvende Segl](https://www.imdb.com/title/tt0050976/). Jeg la det da manuelt inn i kalenderen et par uker i forkant, fordi jeg ville at hendelsen skulle være en del av en hendelsesliste. Om da BOB hadde endret tidspunktet for visningen av filmen, til å være et annet tidspunkt, hadde det blitt utrolig bomtreff for meg å møte opp til originalt planlagt tid. 

Men nå tenker jeg ikke bare på meg selv, men også på alle andre. Med tanke på hvor utrolig tungvint dette er, er det jo ikke rart at det blir lite oppmøte på lokale arrangementer. Det er heller ikke rart at ingen får med seg arrangementene. Det er ingen som finner dem, og ingen som gidder å skrive dem inn i kalenderen sin.

### Hvordan kan det bli bedre?

Den beste løsningen på dette problemet er å abonnere på hendelseslister. Å generere en `.ics`-URL som kan hentes ut av nettside-besøkende. Den URL-en kan de nettside-besøkende legge inn i sin egen kalender. Da blir kalenderen deres regelmessig automatisk synkronisert med arrangementsverten sin hendelsesliste. Enhver forandring i hendelsen, gjort av arrangementsverten, blir oppdatert i de nettside-besøkende sin kalender. Helt uten at nettside-besøkeren trenger tenke på det, eller å gjøre noe.

Jeg ser for meg to løsninger på dette problemet. 

1. **Vi normaliserer å abonnere på andres kalendere.**

   Hver arrangementsvert, eller "hendelsestorg", lager sin egen tekniske løsning som genererer en `.ics`-URL. En god løsning på dette er Echo sin: [https://echo.uib.no/beta/calendar](https://echo.uib.no/beta/calendar). Her kan du "bygge" din egen `.ics`-URL ved å krysse av for hvilke typer hendelser du vil følge med på. Da får du en konstant oppdaterende liste med hendelser. Dette er forholdsvis bedre enn å lytte på en URL for hvert individuelle arrangement, siden min personlige kalender blir brått ganske rotete. En semi-dårlig løsning er [BOB](https://bergenbibliotek.no/arrangement/alle-arrangementer) sin løsning. Den gir meg absolutt alle hendelser, men jeg kan ikke filtrere ut de som er absolutt ikke relevant for meg. 

2. **Én kalender-tjeneste opprettes for alle arrangementsverter.**

   Meetup er en utrolig god idé, men er ikke helt optimal for å løse dette problemet. Det er et fåtall av arrangementsverter som legger ut hendelser der, og det er ikke mulig å abonnere på hendelser. Du får opp hendelsen i meetup-kalenderen din, om du har bruker, men bare hvis du trykker på at du skal komme innom. Personlig hadde jeg foretrukket et gratis alternativ, hvor en ikke trengte å registrere seg, som alle arrangementsverter brukte. Samtidig, burde også alle hendelser være synlige, uavghengig av om du trykker "skal" eller ikke.

### Arrangementsverter

Under finner du en liste med arrangementsverter jeg har funnet i Bergen så langt.

#### Generelt

- [Bergenlive.no](https://www.bergenlive.no/konsertkalender/)

- [Ticketmaster for Bergen](https://www.ticketmaster.no/city/bergen/40500)

- [TicketCo for Bergen](https://ticketco.events/no/nb/m?pattern=bergen)

- [Kode (Kunstmuseum)](https://www.kodebergen.no/kalender)

- [USF Verftet](https://usf.no/program/)

- [Landmark](https://landmark.ticketco.events/no/nb/)

- [Bergen Offentlige Bibliotek](https://bergenbibliotek.no/arrangement)

#### Studenter

- [Kulturhuset i Bergen](https://www.kulturhusetibergen.no/program/)

- [Det Akademiske Kvarter](https://kvarteret.no/events)

- [Aktive Studenter Bergen](https://asfbergen.no/hva-skjer/)

- [Bergen Realistforening](https://rf.uib.no/)

- [Echo](https://echo.uib.no/for-studenter/arrangementer)

- [Enter](https://www.uib.no/infomedia/38184/enter-studentforeningen-ved-infomedia)