function renderProfileOverviewView() {
    let listOfProfiles = getListOfProfiles(8);
    let profilesHtml = '';
    for(let profile of listOfProfiles) {
        profilesHtml += /*HTML*/ `
            <div>
                ${profile.name}, ${profile.age}
                <br>
                <button onclick="setViewProfile(${profile.id})">Åpne profil</button>
            </div>
        `;
    }

    document.getElementById("app").innerHTML = /*HTML*/ `
        <h2>Dette er en oversikt over profiler</h2>
        ${profilesHtml}
        <button onclick="setViewMyProfile()">Min profil</button>
    `
}