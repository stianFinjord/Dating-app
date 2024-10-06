function renderLoginView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div>
            <form>
                Brukernavn:<input type='text'><br>
                Passord:<input type='password'><br>
            </form>
            <button onclick="setViewProfileOverview()">Logg inn</button>
        </div>
    `
}