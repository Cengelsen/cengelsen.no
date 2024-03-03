+++
title = "Vi Burde Alle Abonnere På Kalendere"
date = "2024-02-26"
tags = ["Kalender", "Automatisering", "Synkronisering", "Planlegging"]
categories = ["Mening"]
description = "Vi burde normalisere å abonnere på kalenderstrømmer, slik at vi aldri går glipp av hendelser igjen. Pluss, det er mindre tungvint."
+++

Kanskje ikke så kontroversiell eller nyskapende mening, men vi burde normalisere å abonnere på kalenderstrømmer. I det siste har jeg blitt litt fascinert av å kunne importere hendelser fra andres kalendere inn i min egen. Dette kom fra ønsket om å finne diverse arrangementer som jeg kunne delta på utenfor min vanlige rutine. 

Jeg søkte derfor igjennom alle mulige arrangører jeg kunne finne i byen min for å se hvilke arrangementer de tilbydde ut halvåret. Dette tok overraskende lang tid og kan garantert gjøres lettere. 

### Definisjoner

Denne seksjonen kan bli litt lang og pedantisk, så [klikk her om du vil lese forbi](#hvordan-er-situasjonen-nå).

- **Arrangør**

   Enhver aktør som organiserer hendelser. I denne teksten er det ikke det samme som en nettside som samler hendelser fra flere arrangører inn i samme plattform. 

- **Hendelsestorg**
   
   En plattform, hovedsakelig nettside, som fasiliterer for at arrangører kan publisere og dele hendelsene de arrangerer. 

- **Kalender-strøm**

   En kontinuerlig strøm bestående av hendelser. Hendelsene er objekter i `.ics`-formatet.

- **Kalenderabonnent**

   En hvilken som helst aktør som lytter på en kalenderstrøm.

- **Hendelse**

   Fellesbetegning for alle objekter i kalenderstrømmen. Dette er alt fra arrangementer, til fester, til dugnader, til avtaler og møter. Her er alle typer hendelser, slik som jeg logisk deler dem opp i kategorier:

   - Arrangement

     Et arrangement er en type hendelse hvor deltakerne konsumerer et innhold levert av en arrangementsvert, eller arrangør. Deltakelse er i utgangspunktet helt frivillig, men det er muligens noen tilfeller hvor andre aktører krever at du deltar. 
     
     Om et arrangement har en programplan med flere separate hendelser, må en anvende en kategorisering av hver hendelse i programplanen. Om programplanen utelukkende inneholder hendelser av en annen type, kan hele arrangementet defineres som den typen. F.eks. Et arrangement kan ha en programplan hvor alle hendelsene in programplanen er en aktiv fest (se under). I så tilfelle er hele arrangementet en aktiv fest. 

   - Dugnad

     En dugnad er en type hendelse hvor deltakerne produserer noe, eller bidrar med arbeid. Poenget med hendelsen er å få gjort arbeid, som del av å møte et visst forhåndsbestemt mål. Dette arbeidet gjøres for å bidra til et fellesskap. Deltakelse er i utgangpunktet frivillig, men deltakerne kan ikke opphøre arbeidet før dugnaden er avsluttet. 

   - Fest

     En fest er en type hendelse hvor deltakerne både produserer og konsumerer. Med dette mener jeg at enhver deltaker både tar fra hendelsen og bidrar til hendelsen. Hensikten med hendelsen er sosial interaksjon, og deltakelse er helt frivillig. Denne typen kan videre deles inn i to underkategorier. 

      - Aktiv fest

        En fest som sentrerer seg rundt en aktivitet. I en slik hendelse er det en forventning, og noen ganger et mykt krav, om at deltakeren aktivt involverer seg i aktiviteten. 

      - Inaktiv fest
        
        Sosial hendelse som er foruten en aktivitet som fokus av hendelsen. I en slik hendelse er ikke noe forventning eller krav om aktiv deltakelse. Fokuset er heller bare den sosiale interaksjonen.

   - Avtale
   
     En type hendelse med natur og hensikt som en fest. En avtale skiller seg fra en fest i en forstand av størrelse. En avtale er mindre i størrelse og mer formell i natur. En avtale har alltid et forhåndsbestemt mål, mens en fest ikke har det. En kan videre dele denne typen inn i to underkategorier.
    
      - Alvorlig avtale

        Dette er et type møte hvor deltakere møtes for å produktive formål. Møtet er av en alvorlig natur og ofte relatert til avklaring av informasjon i arbeidstid. 

      - Festlig avtale

        Dette er et type møte hvor deltakere møtes for festlige formål. Møtet er av en avslappet natur og ofte relatert til sosial interaksjon på fritiden.

   - Tidsfrist
     
     En tidsfrist er en type hendelse i kalenderstrømmen som er lik i natur som en avtale. Forskjellen er at en ikke nødvendigvis har samtykket med tidspunktet, som er utelukkende bestemt av arrangøren. Det er et hardt krav at denne tidsfristen må imøtekommes av deltakeren. Hensikten med tidsfrister er vanligvis for at arrangøren skal forsikre seg at mål er nådd i tide, eller at arbeid blir gjort i tide.

   - Gym

     Dette er en type hendelse hvor en hverken produserer eller konsumerer. Hensikten med hendelsen er å delta i en aktivitet, enten for seg selv eller med andre, og gjennomføre sin kroppslige plikt. Hensikten med slike hendelser er å forbedre, eller vedlikeholde, sin egen fysiske kapasitet. Det er helt frivillig grad av deltakelse.

### Hvordan er situasjonen nå?

Nå vet jeg ikke hvordan det er i din by, men Bergen er ikke særlig oversiktlig når det gjelder å finne diverse hendelser som skjer rundt i byen. Det er ikke ett sentralt sted hvor en kan hente ut absolutt alle hendelser som skjer. De ulike typene hendelser, er spredd ut på en god del forskjellige nettsider. 

De aller fleste arrangører har en egen nettside, hvor de legger ut hendelsesdetaljer, men ikke alle. De som ikke har egen nettside, legger bare ut hendelsesinformasjonen på Facebook :nauseated_face: eller Instagram :vomiting_face:, hvilket ikke er idéelt for alle.

arrangørene bruker tjenester som [Ticketmaster for Bergen](https://www.ticketmaster.no/city/bergen/40500), [TicketCo for Bergen](https://ticketco.events/no/nb/m?pattern=bergen), [Bergenlive](https://www.bergenlive.no/konsertkalender/), [Studentbergen](https://www.studentbergen.no/studentkalender) og [Meetup for Bergen](https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&sortField=DATETIME&location=no--Bergen) for å legge ut arrangementsinformasjon i tillegg til sin egen side. [Det Akademiske Kvarter](https://kvarteret.no/events) er et eksempel på en side som henter ut en liste av alle arrangementer fra studentbergen, hvor lokalet er Det Akademiske Kvarter. 

Det er noe overlapp mellom et par av nettsidene, men ikke helt. Så om en vil finne alle aktuelle hendelser, må en gå fra nettside til nettside og lete. Foreløpig, har ingen av nettsidene nevnt ovenfor, utenom TicketCo, en måte å laste ned en `.ics`.-fil som jeg kan importere inn i kalenderen min. Viktigst av alt; de har ikke en måte å abonnere på hendelser.

**NB**: *Jeg legger ved en liste over alle aktuelle arrangører jeg fant under [arrangører](#arrangører).*

### Hva er problemet?

Problemet er hovedsakelig at det er tidkrevende og kronglete å finne de hendelsene jeg vil gå på. For hver hendelse jeg finner, må jeg, i min egen kalender, opprette ny hendelse, skrive inn tittel, skrive inn beskrivelse, velge start-tidspunkt, velge slutt-tidspunkt, velge riktig kalender-merkelapp, lagre, gå til neste hendelse og gjenta. 

Snork og dobbelsnork! Skal det virkelig forventes av meg i den kommende KI-æraen at jeg skal gjøre noe som helst manuelt?

Ikke bare det, men det er 100% mulig for en arrangør å endre detaljene på en hendelse etter at jeg har manuelt lagt det inn i kalenderen min. Så da må jeg regelmessig verifisere i ettertid at ingenting har forandret seg i hendelsen. 

For eksempel, ved [Bergens Offentlige Bibliotek](https://bergenbibliotek.no/) (BOB) skulle de vise en film, kalt [Det Syvende Segl](https://www.imdb.com/title/tt0050976/). Jeg la det da manuelt inn i kalenderen et par uker i forkant, fordi jeg ville at hendelsen skulle være en del av en liste av hendelser, eller kalenderstrøm. Dette er bare fordi jeg vil holde kalenderen min organisert. Om da BOB hadde endret tidspunktet for visningen av filmen, til å være et annet tidspunkt, hadde det blitt utrolig bomtreff for meg å møte opp til originalt planlagt tid. 

Jeg tenker ikke bare på meg selv her, men også på alle andre. Med tanke på hvor utrolig tungvint dette er, er det ikke rart at det er lite oppmøte på lokale hendelser. Siden det ikke finnes en sentralisert plattform for dette, er det heller ikke rart at ingen vet om hendelsene. Ingen finner dem. Synligheten til hendelser generelt følger hovedsakelig denne filosofien: "Du får vite om det hvis noen du kjenner vet om det". Dette er ganske ineffektivt. Videre gidder ingen å skrive dem inn i kalenderen sin, fordi det er for tungvint, og vanligvis fordi de ikke kan se hvem andre de kjenner som skal dit.

### Hvordan kan det bli bedre?

Den beste løsningen på dette problemet, i min mening, er å abonnere på kalenderstrømr. Å generere en `.ics`-URL som kan hentes ut av nettside-besøkende. Den URL-en kan de nettside-besøkende legge inn i sin egen kalender. Da blir kalenderen deres regelmessig automatisk synkronisert med arrangøren sin kalenderstrøm. Enhver forandring i hendelsen, gjort av arrangøren, blir oppdatert i de nettside-besøkende sin kalender. Helt uten at nettside-besøkeren trenger tenke på det, eller å gjøre noe.

Jeg ser for meg to løsninger på dette problemet. 

1. **Vi normaliserer å abonnere på andres kalendere.**

   Hver arrangør, samt hvert hendelsestorg, lager sin egen tekniske løsning som genererer en `.ics`-URL. En god løsning på dette er Echo sin: [https://echo.uib.no/beta/calendar](https://echo.uib.no/beta/calendar). Her kan du "bygge" din egen `.ics`-URL ved å krysse av for hvilke typer hendelser du vil følge med på. Da får du en konstant oppdaterende liste med hendelser. Dette er forholdsvis bedre enn å lytte på en URL for hvert individuelle hendelse, siden min personlige kalender blir brått ganske rotete. En semi-dårlig løsning er [BOB](https://bergenbibliotek.no/arrangement/alle-arrangementer) sin løsning. Den gir meg absolutt alle hendelser, men jeg kan ikke filtrere ut de som er absolutt ikke relevant for meg. 

2. **Én kalender-tjeneste opprettes for alle arrangører.**

   Meetup er en utrolig god idé, men er ikke helt optimal for å løse dette problemet. Det er et fåtall av arrangører som legger ut hendelser der, og det er ikke mulig å abonnere på hendelser. Du får opp hendelsen i meetup-kalenderen din, om du har bruker, men bare hvis du trykker på at du skal komme innom. Personlig hadde jeg foretrukket et gratis alternativ, hvor en ikke trengte å registrere seg, som alle arrangører brukte. Samtidig, burde også alle hendelser være synlige, uavghengig av om du trykker "skal" eller ikke.

### Konklusjon

Alle organisasjoner, samt andre aktører, som organiserer og verter hendelser, burde opprette en måte for folk å abonnere på en kalenderstrøm som gir dem oversikt over alle kommende hendelser. Alternativt, en måte å importere en `.ics`-fil om det bare skulle være en enkelt hendelse. På den måten garanterer du, som arrangør, at alle som abonnerer på den kalenderstrømmen får med seg alt de trenger å vite, samt alle fortløpende endringer som blir gjort på hendelsen i forkant av hendelsesdatoen.

Den idéelle løsningen jeg ser for meg fyller følgende krav:

- Det er en URL som jeg kan importere inn i min egen kalender, som kalenderen min "lytter på".
- Jeg kan filtrere vekk den typen hendelser jeg ikke vil følge med på.
- For hvert hendelse, kan jeg laste ned en `.ics`-fil som bare handler om det hendelseet.
- Om det er mulig, burde jeg kunne se hvem som skal på hendelseet. Selvfølgelig, med forutsetningen om at en har samtykke fra alle abonnenter.

Denne lille implementasjonen på nettsiden din, uansett hvem du er som arrangør, mener jeg kan drastisk forbedre oppmøtet på hendelsene dine. 

### arrangører

Under finner du en grov, tafatt liste med arrangører jeg har funnet i Bergen.

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