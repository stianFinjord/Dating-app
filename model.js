const model = {
    // tilstand app
    app: {
        loggedInUser: 0,
        currentPage: 'chatOverview', //login, profileView, profileOverview, chat, chatOverview, myProfile
        shownProfile: 1,
    },
    // input-felter fra hver side
    inputs: {
        loginForm: {
            username: '',
            password: '',
        },
        profileEditForm: {
            bio: '',
        },
        uploadPhotos: {
            photos: '',
        },
        messageForm: {
            message: '',
        },
    },

    // data
    profiles: [
        {
            id: 1,
            name: "Jørgine",
            age: 28,
            bio: "Ligge? 🤤🤤",
            photoId: 1,
        },
        {
            id: 2,
            name: "Elvira",
            age: 23,
            bio: "Jeg er egentlig 21 men jeg vet ikke hvordan jeg endrer alder",
            photoId: 2,
        },
        {
            id: 3,
            name: "Frida",
            age: 25,
            bio: "Profesjonell klovn 🤡 Søker en som kan få meg til å le like mye som jeg får andre til å le",
            photoId: 3,
        },
        {
            id: 4,
            name: "Astrid",
            age: 31,
            bio: "Fullstendig besatt av true crime-podcasts. Hvis du forsvinner, lover jeg å finne ut hva som skjedde 🕵️‍♀️",
            photoId: 4,
        },
        {
            id: 5,
            name: "Nora",
            age: 22,
            bio: "Ekstrem introvert. La oss date ved å sende memes til hverandre og aldri møtes 😅",
            photoId: 5,
        },
        {
            id: 6,
            name: "Mia",
            age: 27,
            bio: "Jeg snakker flytende sarkasme og kan lage den perfekte ostesmørbrød. Hva mer trenger du? 🧀",
            photoId: 6,
        },
        {
            id: 7,
            name: "Ingeborg",
            age: 33,
            bio: "Wannabe-viking. Leter etter noen å plyndre landsbyer med (metaforisk sett, altså) ⚔️",
            photoId: 7,
        },
        {
            id: 8,
            name: "Thea",
            age: 20,
            bio: "Aspirerende kattedame. Har allerede 5, men det er plass til flere (katter, ikke kjærester) 🐱",
            photoId: 8,
        },
        {
            id: 9,
            name: "Linnea",
            age: 29,
            bio: "Profesjonell overtenkende. Kan holde en samtale gående i timesvis... med meg selv 🤯",
            photoId: 9,
        },
    ],
    messages: [
        {
            sentById: 0,
            sentToId: 1,
            content: "Lasagne! 🇮🇹👌",
            timeStamp: "2024-09-23T10:25:17Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Hei! 👋 Så du liker å bake?",
            timeStamp: "2024-09-23T10:15:30Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Jepp! 🍞 Kanelboller er spesialiteten min",
            timeStamp: "2024-09-23T10:18:45Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Får italienere til å gråte (av glede)",
            timeStamp: "2024-09-23T10:25:45Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Nice! Har du et hemmelig triks? 😉",
            timeStamp: "2024-09-23T10:20:12Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Haha, masse kanel og en klype trøndermagi 😎",
            timeStamp: "2024-09-23T10:22:03Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Du da? Noen kulinariske skills?",
            timeStamp: "2024-09-23T10:22:30Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Imponerende!",
            timeStamp: "2024-09-23T10:27:20Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Kanelbolle-lasagne, noen?😂",
            timeStamp: "2024-09-23T10:27:55Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Hahaha du er gal!",
            timeStamp: "2024-09-23T10:30:10Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "...men jeg liker det 😏",
            timeStamp: "2024-09-23T10:30:30Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Kanskje vi skulle møtes og \"utveksle oppskrifter\"? 😉",
            timeStamp: "2024-09-23T10:32:45Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Hmm, interessant forslag 🤔",
            timeStamp: "2024-09-23T10:35:20Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Men du må nok jobbe litt for å få alle hemmelighetene mine 😘",
            timeStamp: "2024-09-23T10:35:55Z"
        },
        {
            sentById: 2,
            sentToId: 0,
            content: "Hei! Jeg er 23 år gammel nå. Eller var det 21? 🤔 Kan du hjelpe meg å telle?",
            timeStamp: "2024-09-24T14:30:00Z"
        },
        {
            sentById: 0,
            sentToId: 2,
            content: "Haha, la oss si du er tidløs! 😉 Alder er bare et tall, ikke sant?",
            timeStamp: "2024-09-24T14:35:22Z"
        },
        {
            sentById: 2,
            sentToId: 0,
            content: "Åh, du er smart! Kanskje du kan lære meg å telle også? 😅",
            timeStamp: "2024-09-24T14:40:15Z"
        },
        {
            sentById: 0,
            sentToId: 2,
            content: "Selvfølgelig! La oss begynne med å telle hvor mange drinker vi skal ha på vår første date? 🍹",
            timeStamp: "2024-09-24T14:45:30Z"
        },
        {
            sentById: 3,
            sentToId: 0,
            content: "Knock knock! 🚪",
            timeStamp: "2024-09-25T10:00:00Z"
        },
        {
            sentById: 0,
            sentToId: 3,
            content: "Hvem der?",
            timeStamp: "2024-09-25T10:02:30Z"
        },
        {
            sentById: 3,
            sentToId: 0,
            content: "Lettuce!",
            timeStamp: "2024-09-25T10:05:00Z"
        },
        {
            sentById: 0,
            sentToId: 3,
            content: "Lettuce hvem?",
            timeStamp: "2024-09-25T10:07:45Z"
        },
        {
            sentById: 3,
            sentToId: 0,
            content: "Lettuce go on a date! 🥬😂",
            timeStamp: "2024-09-25T10:10:15Z"
        },
        {
            sentById: 0,
            sentToId: 3,
            content: "Haha! Du er virkelig en profesjonell klovn! 🤡 Jeg er solgt!",
            timeStamp: "2024-09-25T10:15:00Z"
        },
        {
            sentById: 4,
            sentToId: 0,
            content: "Hei! Jeg har nettopp hørt en fascinerende true crime-podcast. Vil du høre om det?",
            timeStamp: "2024-09-26T19:00:00Z"
        },
        {
            sentById: 0,
            sentToId: 4,
            content: "Absolutt! Men la oss møtes på et offentlig sted, bare for å være på den sikre siden... 😅",
            timeStamp: "2024-09-26T19:05:30Z"
        },
        {
            sentById: 4,
            sentToId: 0,
            content: "Haha, smart! Jeg lover å ikke myrde deg... ennå. 😉🔪",
            timeStamp: "2024-09-26T19:10:45Z"
        },
        {
            sentById: 0,
            sentToId: 4,
            content: "Phew! Det er en lettelse. Skal vi si kafé i morgen? Jeg tar med mitt eget vann, bare for å være sikker. 🚰",
            timeStamp: "2024-09-26T19:15:20Z"
        },
        {
            sentById: 5,
            sentToId: 0,
            content: "...",
            timeStamp: "2024-09-27T12:00:00Z"
        },
        {
            sentById: 0,
            sentToId: 5,
            content: "Er dette din måte å sende memes på? 🤔",
            timeStamp: "2024-09-27T12:30:00Z"
        },
        {
            sentById: 5,
            sentToId: 0,
            content: "Ja! Du forstår meg! 😍 Vil du chatte i stillhet sammen?",
            timeStamp: "2024-09-27T13:00:00Z"
        },
        {
            sentById: 0,
            sentToId: 5,
            content: "...",
            timeStamp: "2024-09-27T13:05:00Z"
        },
        {
            sentById: 5,
            sentToId: 0,
            content: "Dette er den beste samtalen jeg noensinne har hatt! 🥰",
            timeStamp: "2024-09-27T13:10:00Z"
        },
        {
            sentById: 6,
            sentToId: 0,
            content: "Hei, jeg hører du liker ost? 🧀",
            timeStamp: "2024-09-28T15:00:00Z"
        },
        {
            sentById: 0,
            sentToId: 6,
            content: "Ja, jeg er ganske glad i ost. Hvordan visste du det?",
            timeStamp: "2024-09-28T15:05:30Z"
        },
        {
            sentById: 6,
            sentToId: 0,
            content: "Jeg gjetter godt... og du ser ut som en som har god smak. 😏",
            timeStamp: "2024-09-28T15:10:45Z"
        },
        {
            sentById: 0,
            sentToId: 6,
            content: "Smooth! Nesten like smooth som en god brie. 😉",
            timeStamp: "2024-09-28T15:15:20Z"
        },
        {
            sentById: 6,
            sentToId: 0,
            content: "Ha! Du er gorgon-zolagende! 😂🧀",
            timeStamp: "2024-09-28T15:20:00Z"
        },{
            sentById: 7,
            sentToId: 0,
            content: "Hei! Jeg er på utkikk etter en medplyndrer. Interessert? 🗡️",
            timeStamp: "2024-09-29T09:00:00Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Vi kan starte med å plyndre kjøleskapet mitt. Det er fullt av øl og pizza! 🍕🍺",
            timeStamp: "2024-09-29T09:00:30Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Wow, en ekte viking! 😍 Jeg er helt med!",
            timeStamp: "2024-09-29T09:05:00Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Men først må jeg vite: Foretrekker du øks eller sverd? Dette er et viktig spørsmål for enhver potensiell plyndringspartner. ⚔️",
            timeStamp: "2024-09-29T09:05:45Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Haha, jeg liker hvordan du tenker! 😂",
            timeStamp: "2024-09-29T09:10:00Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Personlig foretrekker jeg en god gammeldags klubbe. Enkel, effektiv, og flott til å åpne hermetikkbokser! 🍖",
            timeStamp: "2024-09-29T09:10:30Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Forresten, hva synes du om hjelmer med horn? Jeg mener det er essensielt for enhver moderne viking. 🐮",
            timeStamp: "2024-09-29T09:11:15Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Klubbe? Imponerende valg! Perfekt for både plyndring og grilling. 🍖🔥",
            timeStamp: "2024-09-29T09:15:00Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Og hjelmer med horn? Selvfølgelig! Hvordan skal ellers folk vite at vi er seriøse vikinger? 😎",
            timeStamp: "2024-09-29T09:15:45Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Jeg foreslår at vi starter vår plyndringstur på nærmeste IKEA. De har alt en viking trenger - møbler, meatballs, og masse forvirrede mennesker å skremme! 🛋️🍝",
            timeStamp: "2024-09-29T09:16:30Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "Miao! Eh, jeg mener hei! 🐱",
            timeStamp: "2024-09-30T14:00:00Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "Unnskyld, jeg har tilbrakt så mye tid med kattene mine at jeg begynner å snakke som dem. 😺",
            timeStamp: "2024-09-30T14:00:30Z"
        },
        {
            sentById: 0,
            sentToId: 8,
            content: "Haha, ingen problemer! Jeg snakker flytende katt. La meg prøve: Purr purr meow? 😸",
            timeStamp: "2024-09-30T14:05:00Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "OMG! Du snakker jo perfekt katt! 😻",
            timeStamp: "2024-09-30T14:10:00Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "Vil du komme over og møte familien min? Og med familie mener jeg selvfølgelig kattene mine. 🐈🐈🐈🐈🐈",
            timeStamp: "2024-09-30T14:10:30Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "Jeg lover at de ikke biter... mye. 😉",
            timeStamp: "2024-09-30T14:11:00Z"
        },
        {
            sentById: 0,
            sentToId: 8,
            content: "Det høres fantastisk ut! Jeg tar med kattegress og laserpeker. 🌿🔴",
            timeStamp: "2024-09-30T14:15:00Z"
        },
        {
            sentById: 0,
            sentToId: 8,
            content: "Men jeg må vite en ting først: Hva er din mening om hunder? Dette kan være et deal-breaker. 🐕",
            timeStamp: "2024-09-30T14:15:45Z"
        },
        {
            sentById: 9,
            sentToId: 0,
            content: "Hei! Jeg har tenkt på noe...",
            timeStamp: "2024-10-01T10:00:00Z"
        },
        {
            sentById: 9,
            sentToId: 0,
            content: "Eller, vent, kanskje jeg ikke har det?",
            timeStamp: "2024-10-01T10:00:15Z"
        },
        {
            sentById: 9,
            sentToId: 0,
            content: "Jo, jeg har det! Tror jeg... 🤔",
            timeStamp: "2024-10-01T10:00:30Z"
        },
        {
            sentById: 0,
            sentToId: 9,
            content: "Haha, jeg elsker en god cliffhanger! Hva har du tenkt på? Eller ikke tenkt på? 😄",
            timeStamp: "2024-10-01T10:05:00Z"
        },
        {
            sentById: 9,
            sentToId: 0,
            content: "Okay, så jeg tenkte... hva om fiskene i havet faktisk er allergiske mot vann, men de bare ikke vet om det fordi de aldri har vært på land? 🐠💦",
            timeStamp: "2024-10-01T10:10:00Z"
        },
        {
            sentById: 9,
            sentToId: 0,
            content: "Vent, det var dumt. Glem det. 🤦‍♀️",
            timeStamp: "2024-10-01T10:10:15Z"
        },
        {
            sentById: 9,
            sentToId: 0,
            content: "Men hva om det er sant?! 😱",
            timeStamp: "2024-10-01T10:10:30Z"
        },
        {
            sentById: 0,
            sentToId: 9,
            content: "Wow, du har nettopp blåst mitt sinn! 🤯 Dette er den type dype tanker jeg lever for!",
            timeStamp: "2024-10-01T10:15:00Z"
        },
        {
            sentById: 0,
            sentToId: 9,
            content: "Kanskje vi burde starte en support-gruppe for fisk med vandallergi? 🐟🚱",
            timeStamp: "2024-10-01T10:15:30Z"
        },
        {
            sentById: 0,
            sentToId: 9,
            content: "Første møte kan være på stranden. Vi kan kalle det 'Fins and Pins: Livet På Land' 😂",
            timeStamp: "2024-10-01T10:16:00Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Hei igjen! Husker du vi snakket om å bake sammen? 🍞",
            timeStamp: "2024-10-02T16:00:00Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Jeg har nettopp funnet opp noe revolusjonerende: Lasagnekanelboller! 🍝🧁",
            timeStamp: "2024-10-02T16:00:30Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Tror du Gordon Ramsay ville vært stolt eller sende meg til kjøkkenhelvete? 👨‍🍳😅",
            timeStamp: "2024-10-02T16:01:00Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Lasagnekanelboller?! Du er et geni! 🤯👏",
            timeStamp: "2024-10-02T16:05:00Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Gordon Ramsay ville nok kalt det for en 'idiotisk sandwich', men jeg kaller det innovasjon! 😂",
            timeStamp: "2024-10-02T16:05:45Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Kan vi lage en datenight ut av dette? Du tar med lasagnen, jeg tar med kanelen, og sammen lager vi magi (eller matforgiftning)! 🎩✨",
            timeStamp: "2024-10-02T16:06:30Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Hei igjen, min kjære viking-partner! 🛡️ Har du plyndret noe interessant i det siste?",
            timeStamp: "2024-10-05T11:00:00Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Åh, du skulle bare visst! 😂 Jeg 'plyndret' naboen min for en kopp sukker i går.",
            timeStamp: "2024-10-05T11:05:00Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Det var intens. Jeg måtte banke på døren og alt! 🚪💪",
            timeStamp: "2024-10-05T11:05:30Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Haha, du er virkelig en fryktinngytende kriger! 🤣 Neste gang burde vi ta det til neste nivå.",
            timeStamp: "2024-10-05T11:10:00Z"
        },
        {
            sentById: 0,
            sentToId: 7,
            content: "Kanskje vi kan 'plyndre' det lokale biblioteket? Tenk på all kunnskapen vi kan erobre! 📚🏴‍☠️",
            timeStamp: "2024-10-05T11:10:30Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Du er et geni! 😍 Biblioteket vil skjelve i frykt når vi kommer med våre lånekort!",
            timeStamp: "2024-10-05T11:15:00Z"
        },
        {
            sentById: 7,
            sentToId: 0,
            content: "Men husk, vi må være stille. Det er tross alt et bibliotek. Vi er vikinger, ikke barbarer! 🤫📖",
            timeStamp: "2024-10-05T11:15:30Z"
        },
        {
            sentById: 0,
            sentToId: 8,
            content: "Hei igjen, kattehviskeren! 😺 Hvordan går det med din pelskledde familie?",
            timeStamp: "2024-10-06T14:00:00Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "Mjauu... Eh, jeg mener, det går bra! 😸 De har startet en slags katte-fagforening.",
            timeStamp: "2024-10-06T14:05:00Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "De krever mer godbiter og lengre sovetid. Jeg tror jeg har skapt noen monster! 🙀",
            timeStamp: "2024-10-06T14:05:30Z"
        },
        {
            sentById: 0,
            sentToId: 8,
            content: "En katte-fagforening? 😂 Det er det mest fantastiske jeg har hørt!",
            timeStamp: "2024-10-06T14:10:00Z"
        },
        {
            sentById: 0,
            sentToId: 8,
            content: "Kanskje vi burde arrangere en streik? 'Nei til støvsugere, ja til flere kartonger!' 📦🐾",
            timeStamp: "2024-10-06T14:10:30Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "Haha, ikke gi dem ideer! 🤣 Men seriøst, vil du komme over og hjelpe meg å forhandle?",
            timeStamp: "2024-10-06T14:15:00Z"
        },
        {
            sentById: 8,
            sentToId: 0,
            content: "Jeg kan tilby hjemmelaget lasagne som betaling. Det er kattenes favoritt... og forhåpentligvis din også? 🍝😉",
            timeStamp: "2024-10-06T14:15:30Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Hei bakemesteren! 👨‍🍳 Hvordan gikk det med lasagnekanelbollene?",
            timeStamp: "2024-10-07T10:00:00Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Å, du skulle bare visst! 😅 La oss bare si at Gordon Ramsay ville hatt noen valgte ord...",
            timeStamp: "2024-10-07T10:05:00Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Men hey, jeg fant ut at kanel og kjøttsaus faktisk ikke er en så ille kombinasjon! 🤷‍♀️🍝",
            timeStamp: "2024-10-07T10:05:30Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "Haha, du er virkelig en kulinarisk pioner! 🏅 Kanskje vi burde starte en YouTube-kanal?",
            timeStamp: "2024-10-07T10:10:00Z"
        },
        {
            sentById: 0,
            sentToId: 1,
            content: "'Katastrofekjøkkenet med Jørgine og co.' Hva sier du? 📺👩‍🍳👨‍🍳",
            timeStamp: "2024-10-07T10:10:30Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "OMG, ja! 😍 Vi kunne lage 'Sjokoladepizza' neste gang!",
            timeStamp: "2024-10-07T10:15:00Z"
        },
        {
            sentById: 1,
            sentToId: 0,
            content: "Eller hva med 'Surstrømming-smoothie'? 🐟🥤 Okay, kanskje det er å ta det litt for langt... 🤢",
            timeStamp: "2024-10-07T10:15:30Z"
        }
    ],
    photos: [
        {
            photoId: 0,
            userId: 0,
            photos: '',
        }
    ],
};