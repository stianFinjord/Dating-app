function logIn() {
    if(usernameExists()) {

    }
    setViewProfileOverview();
}

function setUsernameToModel(username) {
    model.inputs.loginForm.username = username;
}

function setPasswordToModel(password) {
    model.inputs.loginForm.password = password;
}

function usernameExists(username) { //TODO
    return true;
}

function usernameAndPasswordIsCorrect() {
    
}