function renderMyProfileView() {
    bioText = model.profiles[getLoggedInUserId()].bio;
    setBioTextToModel(bioText); // this is to prevent blanking out bio when pressing save without touching the textarea
    document.getElementById("app").innerHTML = /*HTML*/ `
        <button onclick="setViewProfileOverview()">Tilbake</button>
        <p>her redigerer man profilen sin<p>
        <textarea onchange="setBioTextToModel(this.value)" rows=6 cols=40>${bioText}</textarea>
        <button onclick=updateBioOfLoggedInUser()>Lagre</button>

    `
}
