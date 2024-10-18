function viewRandomProfile() { // rename til setRandomProfile
    model.app.shownProfile = model.profiles[Math.floor(Math.random()*model.profiles.length)].id;
    model.app.currentPage = 'profileView';
    showView();
}

function setViewProfile(profileId = null) { //FIXME: Fungerer ikke på profil 0
    model.app.currentPage = 'profileView';
    if (profileId != null) {
        model.app.shownProfileId = profileId;
    }
    showView();
}

function setViewProfileOverview() {
    model.app.currentPage = 'profileOverview';
    showView();
}


function nextProfile() { //FIXME: Oppdatere modellen til neste profil og kalle på showView()
    model.app.shownProfileId = getRandomProfile().id;
    model.app.currentPage = "profileView";
    showView();
}



 function getRandomProfile() {
    return model.profiles[Math.floor(Math.random()*model.profiles.length)];
}


function getListOfProfiles(numberOfProfiles) { // Does not guarantee unique profiles
    let list = [];
    for (let i = 0; i < numberOfProfiles; i++) {
        list.push(getRandomProfile());
    }
    return list;
}
