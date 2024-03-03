+++
title = "We Should All Subscribe to Calendars"
date = "2024-02-26"
tags = ["Calendar", "Automation", "Synchronization", "Planning"]
categories = ["Opinion"]
description = "We should normalize subscribing to calendar feeds so we never miss occurrences again. Plus, it's less cumbersome."
+++

Perhaps not the most controversial or groundbreaking opinion, but we should normalize subscribing to calendar feeds. Lately, I've become a bit fascinated with being able to import occurrences from others' calendars into my own. This stemmed from the desire to find various occurrences I could attend outside of my usual routine.

So, I went through all possible organizers in my city i could find to see what occurrences they offered over the next six months. This surprisingly took quite a while and could definitely be made easier.

### Definitions

This section might get a bit long and pedantic, so [click here if you want to skip ahead](#how-is-the-situation-now).

- **Organizer**

   Any agent that organizes occurences. In this text, it is not the same as a website that aggregates occurrences from multiple organizers into the same platform.

- **Calendar Feed**

   A continuous stream consisting of occurences. The occurrences are objects in the `.ics` format.

- **Calendar Subscriber**

   Any agent that listens to a calendar feed.

- **Occurrence**

   A collective term for all objects in the calendar feed. This includes everything from events to parties, to volunteering opportunities, appointments, and meetings. Here, all types of occurrences are categorized according to my own logic:

   - Event

     An event is a type of occurrence where participants consume content provided by an event host or organizer. Participation is essentially voluntary, but there may be cases where other agents or participants require your participation.

     If an event has a program schedule with multiple separate occurrences, each occurrence in the program schedule must be categorized individually. If the program schedule exclusively contains occurrences of another type, the entire event can be defined as that type. For example, an event may have a program schedule where all occurrences in the program schedule are an active party (see below). In such a case, the entire event is an active party.

   - Volunteering Opportunity

     A volunteering opportunity is a type of occurrence where participants produce something or contribute labor. The point of the occurrence is to get work done as part of meeting a certain predetermined goal. This work is done to contribute to a community. Participation is essentially voluntary, but participants cannot cease work until the occurrence is completed.

   - Party

     A party is a type of occurrence where participants both produce and consume. By this, I mean that every participant both takes from the occurrence and contributes to the occurrence. The purpose of the occurrence is social interaction, and participation is entirely voluntary. This type can be further divided into two subcategories.

      - Active Party

        A party that centers around an activity. In such an occurrence, there is an expectation, and sometimes a soft requirement, for the participant to actively engage in the activity.

      - Inactive Party
        
        A social occurrence without an activity as the focus. In such an occurrence, there is no expectation or requirement for active participation. The focus is solely on social interaction.

   - Appointment
   
     A type of occurrence with the nature and purpose of a party. However, it differs in the sense of scope. An appointment is smaller and more formal in nature. An appointment always has a predetermined goal, while a party has not. This type can be further divided into two subcategories.
    
      - Serious Appointment

        This is a type of meeting where participants meet for productive purposes. The meeting is of a serious nature and often related to work.

      - Casual Appointment

        This is a type of meeting where participants meet for casual purposes. The meeting is of a relaxed nature and often related to social interaction in leisure time.

   - Deadline
     
     A type of occurrence in the calendar feed that is similar in nature to an appointment. The difference is that one participant has not necessarily agreed to the time, which is mostly exclusively determined by the organizer. It is a strict requirement that this deadline must be met by the participant to participate. The purpose of deadlines are usually to ensure that goals are met on time, or that work is done in a timely manner.

   - Gym

     This is a type of occurrence where one neither produces nor consumes. The purpose of the occurrence is to engage in an activity, either alone or with others, and fulfill one's bodily duty. The purpose of such occurrences is to improve, or maintain, the participants physical capacity. Participation is entirely voluntary.

### How is the situation now?

I'm not sure how it is in your city, but Bergen is not particularly organized when it comes to finding various occurrences happening around the city. There isn't one central place where you can fetch all  happening. The different types of occurrences are spread out across quite a few different websites.

Most organizers have their own website where they post event details, but not all. Those who don't have their own website simply post event information on Facebook 🤢 or Instagram 🤮, which is not ideal for everyone.

Organizers use services like [Ticketmaster for Bergen](https://www.ticketmaster.no/city/bergen/40500), [TicketCo for Bergen](https://ticketco.events/no/nb/m?pattern=bergen), [Bergenlive](https://www.bergenlive.no/konsertkalender/), [Studentbergen](https://www.studentbergen.no/studentkalender), and [Meetup for Bergen](https://www.meetup.com/find/?source=EVENTS&eventType=inPerson&sortField=DATETIME&location=no--Bergen) to post event information in addition to their own site. [Det Akademiske Kvarter](https://kvarteret.no/events) is an example of a site that extracts a list of all events from Studentbergen, where the venue is Det Akademiske Kvarter.

There is some overlap between a couple of the websites, but not entirely. So if you want to find all relevant occurrences, you have to go from website to website and search. Currently, none of the websites mentioned above, except for TicketCo, provide a way to download an `.ics` file that I can import into my calendar. Most importantly, they don't provide a way to subscribe to occurrences.

**Note**: *I've included a list of all relevant organizers I found under [organizers](#organizers).*

### What's the problem?

The problem mainly lies in the fact that it's time-consuming and cumbersome to find the occurrences I want to attend. For each event I find, I have to manually create a new event in my own calendar, enter the title, description, select start time, select end time, choose the right calendar label, save, move to the next event, and repeat.

Snork and double snork! Is it really expected of me in the upcoming AI era to do anything manually?

Not only that, but it's 100% possible for an organizer to change the details of an event after I've manually entered it into my calendar. So I have to regularly verify afterwards that nothing has changed in the event.

For example, at [Bergens Offentlige Bibliotek](https://bergenbibliotek.no/) (BOB), they were showing a movie called [The Seventh Seal](https://www.imdb.com/title/tt0050976/). So I manually entered it into my calendar a couple of weeks in advance because I wanted the event to be part of a list of occurrences, or calendar feed. This is just because I want to keep my calendar organized. If BOB had changed the time of the movie screening to a different time, it would have been incredibly inconvenient for me to show up at the originally planned time.

I'm not just thinking about myself here, but also everyone else. Considering how incredibly cumbersome this is, it's no wonder there's little attendance at local occurrences. Since there's no centralized platform for this, it's also not surprising that nobody knows about the occurrences. Nobody finds them. The visibility of occurrences generally follows this philosophy: "You'll find out about it if someone you know knows about it." This is quite inefficient. Furthermore, nobody bothers to write them into their calendar because it's too cumbersome, and usually because they can't see who else they know is going.

### How can it be improved?

The best solution to this problem, in my opinion, is to subscribe to calendar feeds. To generate an `.ics` URL that can be fetched by website visitors. These website visitors can then input the URL into their own calendar. Then, their calendar will be regularly and automatically synchronized with the organizer's calendar feed. Any changes to the event made by the organizer will be updated in the website visitors' calendar. All without the website visitor having to think about it or do anything.

I envision two solutions to this problem.

1. **We normalize subscribing to others' calendars.**

   Each organizer, or "event market," creates their own technical solution that generates an `.ics` URL. A good solution to this is Echo's: [https://echo.uib.no/beta/calendar](https://echo.uib.no/beta/calendar). Here, you can "build" your own `.ics` URL by checking off which types of occurrences you want to keep track of. Then you get a constantly updating list of occurrences. This is relatively better than listening to a URL for each individual event, as my personal calendar suddenly becomes quite cluttered. A semi-poor solution is [BOB's](https://bergenbibliotek.no/arrangement/alle-arrangementer) solution. It gives me all occurrences, but I can't filter out those that are absolutely irrelevant to me.

2. **One calendar service is created for all organizers.**

   Meetup is an incredibly good idea but is not quite optimal for solving this problem. Only a few organizers post occurrences there, and it's not possible to subscribe to occurrences. You'll see the event in your meetup calendar if you have an account, but only if you click that you're going. Personally, I would prefer a free alternative where you don't have to register, which all organizers used. At the same time, all occurrences should be visible, regardless of whether you click "going" or not.

### Conclusion

All organizations, as well as other entities, that organize and host occurrences should create a way for people to subscribe to a calendar feed that provides them with an overview of all upcoming occurrences. Alternatively, a way to import an `.ics` file if it's just a single event. This way, as an organizer, you ensure that everyone subscribing to that calendar feed gets all the information they need, as well as any ongoing changes made to the event leading up to the event date.

The ideal solution I envision meets the following requirements:

- There is a URL that I can import into my own calendar, which my calendar "listens to".
- I can filter out the types of occurrences I don't want to keep track of.
- For each event, I can download an `.ics` file that only concerns that event.
- If possible, I should be able to see who is going to the event. Of course, assuming consent from all subscribers.

This small implementation on your website, whoever you are as an organizer, I believe can drastically improve attendance at your occurrences.

### Organizers

Below you'll find a rough, clumsy list of organizers I found in Bergen.

#### General

- [Bergenlive.no](https://www.bergenlive.no/konsertkalender/)

- [Ticketmaster for Bergen](https://www.ticketmaster.no/city/bergen/40500)

- [TicketCo for Bergen](https://ticketco.events/no/nb/m?pattern=bergen)

- [Kode (Art Museum)](https://www.kodebergen.no/kalender)

- [USF Verftet](https://usf.no/program/)

- [Landmark](https://landmark.ticketco.events/no/nb/)

- [Bergen Offentlige Bibliotek](https://bergenbibliotek.no/arrangement)

#### Students

- [Kulturhuset i Bergen](https://www.kulturhusetibergen.no/program/)

- [Det Akademiske Kvarter](https://kvarteret.no/events)

- [Aktive Studenter Bergen](https://asfbergen.no/hva-skjer/)

- [Bergen Realistforening](https://rf.uib.no/)

- [Echo](https://echo.uib.no/for-studenter/arrangementer)

- [Enter](https://www.uib.no/infomedia/38184/enter-studentforeningen-ved-infomedia)