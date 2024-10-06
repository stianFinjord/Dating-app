function viewRandomProfile() { // rename til setRandomProfile
    model.app.shownProfile = model.profiles[Math.floor(Math.random()*model.profiles.length)].id;
    model.app.currentPage = 'profileView';
    showView();
}

function setViewProfile(profileId) { 
    model.app.currentPage = 'profileView';
    model.app.shownProfile = profileId;
    showView();
}

function setViewProfileOverview() {
    model.app.currentPage = 'profileOverview';
    showView();
}


function nextProfile() { //FIXME: Oppdatere modellen til neste profil og kalle på showView()

    renderProfileView(currentProfile);
}

function getCurrentProfile() { //FIXME: Se på forslag under og ta høyde for manglende verdi
    // return model.profiles.find(profile => profile.id == model.app.shownProfile)
 
     for (let profile of model.profiles) {
         if(profile.id == model.app.shownProfile) {
             return profile;
         }
     }
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
