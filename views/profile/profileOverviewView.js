function renderProfileOverviewView() {
    let listOfProfiles = getListOfProfiles(8);
    let profilesHtml = '';
    for(let profile of listOfProfiles) {
        profilesHtml += /*HTML*/ `
            <div class="profile-card" onclick="setViewProfile(${profile.id})">
                <img src="${getPhotoUrlFromPhotoId(profile.photoId)}">
                <div class="profile-card-text">
                ${profile.name}, ${profile.age}
                </div>
            </div>
        `;
    }

    document.getElementById("app").innerHTML = /*HTML*/ `
        <h2>Dette er en oversikt over profiler</h2>
        <div class="profile-overview">${profilesHtml}</div>
        <button onclick="setViewMyProfile()">Min profil</button>
        <button onclick="setViewChatOverview()">Chatter</button>

    `
}