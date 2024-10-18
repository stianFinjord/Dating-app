function renderLoginView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div>
            <form>
                Brukernavn:<input type='text' value="Stian" onchange=setUsernameToModel(this.value)><br>
                Passord:<input type='password' value="1234"><br>
            </form>
            <button onclick="logIn()">Logg inn</button>
        </div>
    `
}