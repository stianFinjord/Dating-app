function renderProfileView() { 
    currentProfile = getCurrentProfile();
    
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class=profile-view>
        <div>
            <img src="${getPhotoUrlFromPhotoId(currentProfile.photoId)}">
            <p>Navn: ${currentProfile.name}</p>
            <p>Alder: ${currentProfile.age}</p>
        </div>
        <p>${currentProfile.bio}</p>
        <button onclick="renderProfileOverviewView()">Tilbake</button>
        <button onclick="nextProfile()">Neste</button>
        <button onclick="setViewChat()">Send melding</button>
    </div>
    `
}
