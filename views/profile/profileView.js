function renderProfileView() { //FIXME: Bilde viser ikke
    currentProfile = getCurrentProfile();

    document.getElementById("app").innerHTML = /*HTML*/ `
    <div>
        <p>Navn: ${currentProfile.name}</p>
        <p>Alder: ${currentProfile.age}</p>
        <p>${currentProfile.bio}</p>
    <button onclick="renderProfileOverviewView()">Tilbake</button>
    <button onclick="viewRandomProfile()">Neste</button>
    <button onclick="setViewChat()">Send melding</button>
    /* <img src="${currentProfile.profilePicture}"> */
    `
}
