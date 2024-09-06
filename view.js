// view
function profileView(currentProfile) {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div>
        <p>Navn: ${currentProfile.name}</p>
        <p>Alder: ${currentProfile.age}</p>
        <p>${currentProfile.bio}</p>
    <button onclick="profileOverview()">Se alle profiler</button>
    <button onclick="viewRandomProfile()">Vis random profil</button>
    <img src="${currentProfile.profilePicture}">
    `
}

function profileOverview() {
    let profilesHtml = '';
    for(let i = 0; i < profiles.length; i++) {
        profilesHtml += /*HTML*/ `
            <div>
                ${profiles[i].name}, ${profiles[i].age}
                <br>
                <button onclick="profileView(profiles[${i}])">Åpne profil</button>
            </div>
        `;
    }

    document.getElementById("app").innerHTML = /*HTML*/ `
    <h2>Dette er en oversikt over profiler</h2>
    ${profilesHtml}

    `
}

function view3() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div>Dette er en melding-funksjonaliteten</div>
    `
}