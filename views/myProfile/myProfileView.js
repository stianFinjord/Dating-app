function renderMyProfileView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <button onclick="setViewProfileOverview()">Tilbake</button>
        <p>her redigerer man profilen sin<p>
        <input value='Her står egentlig bioen men jeg har ikke laget enda'>
        <button>Lagre</button>

    `
}
