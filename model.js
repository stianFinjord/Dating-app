
// Gammel profil-liste
/* const profiles = [
    new Profile(19, "Stine", "Jeg elsker hester og å gå tur i skogen"),
    new Profile(28, "Jørgine", "Ligge? 🤤🤤"),
    new Profile(23, "Elvira", "Jeg er egentlig 21 men jeg vet ikke hvordan jeg endrer alder"),
    new Profile(25, "Frida", "Profesjonell klovn 🤡 Søker en som kan få meg til å le like mye som jeg får andre til å le"),
    new Profile(31, "Astrid", "Fullstendig besatt av true crime-podcasts. Hvis du forsvinner, lover jeg å finne ut hva som skjedde 🕵️‍♀️"),
    new Profile(22, "Nora", "Ekstrem introvert. La oss date ved å sende memes til hverandre og aldri møtes 😅"),
    new Profile(27, "Mia", "Jeg snakker flytende sarkasme og kan lage den perfekte ostesmørbrød. Hva mer trenger du? 🧀"),
    new Profile(33, "Ingeborg", "Wannabe-viking. Leter etter noen å plyndre landsbyer med (metaforisk sett, altså) ⚔️"),
    new Profile(20, "Thea", "Aspirerende kattedame. Har allerede 5, men det er plass til flere (katter, ikke kjærester) 🐱"),
    new Profile(29, "Linnea", "Profesjonell overtenkende. Kan holde en samtale gående i timesvis... med meg selv 🤯")
]; */

const model = {
    // tilstand app
    app: {
        loggedInUser: null,
        currentPage: 'login',
        shownProfile: null,
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
            id: 0,
            name: "Stine",
            age: 19,
            bio: "Jeg elsker hester og å gå tur i skogen",
            photoId: 0,
        },
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
            content: "",
            timeStamp: "some time format",
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