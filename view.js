// view
showView();
function showView() {
    if (model.app.currentPage === 'profileOverview') {
        profileOverview();
    } else if (model.app.currentPage === 'profileView') {
        profileView();
    } else if (model.app.currentPage === 'login') {
        loginView();
    } else if (model.app.currentPage === 'chat') {
        chatView();
    } else if (model.app.currentPage === 'chatOverview') {
        chatOverview();
    } else if (model.app.currentPage === 'myProfile') {
        myProfileView();
    }
}

function profileView() { //FIXME: Bilde viser ikke
    currentProfile = getCurrentProfile();

    document.getElementById("app").innerHTML = /*HTML*/ `
    <div>
        <p>Navn: ${currentProfile.name}</p>
        <p>Alder: ${currentProfile.age}</p>
        <p>${currentProfile.bio}</p>
    <button onclick="showProfileOverview()">Tilbake</button>
    <button onclick="viewRandomProfile()">Neste</button>
    <button onclick="showChat()">Send melding</button>
    <img src="${currentProfile.profilePicture}">
    `
}

function profileOverview() {
    let listOfProfiles = getListOfProfiles(8);
    let profilesHtml = '';
    for(let profile of listOfProfiles) {
        profilesHtml += /*HTML*/ `
            <div>
                ${profile.name}, ${profile.age}
                <br>
                <button onclick="showProfile(${profile.id})">Åpne profil</button>
            </div>
        `;
    }

    document.getElementById("app").innerHTML = /*HTML*/ `
        <h2>Dette er en oversikt over profiler</h2>
        ${profilesHtml}
        <button onclick="showMyProfile()">Min profil</button>
    `
}

function loginView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div>
            <form>
                Brukernavn:<input type='text'><br>
                Passord:<input type='password'><br>
            </form>
            <button onclick="profileOverview()">Logg inn</button>
        </div>
    `
}

function chatView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        chat kommer hit
        <button onclick="showChatOverview()">Tilbake</button>
    `
}

function chatOverview() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        her er overview av alle chatter
        <button onclick="showProfileOverview()">Tilbake</button>
    `
}

function myProfileView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <button onclick="showProfileOverview()">Tilbake</button>
        <p>her redigerer man profilen sin<p>
        <input value='Her står egentlig bioen men jeg har ikke laget enda'>
        <button>Lagre</button>

    `
}