
function nextProfile(currentProfile) {

    profileView(currentProfile);
}

function viewRandomProfile() {
    model.app.shownProfile = model.profiles[Math.floor(Math.random()*model.profiles.length)].id;
    model.app.currentPage = 'profileView';
    showView();
}

function showProfile(profileId) { 
    model.app.currentPage = 'profileView';
    model.app.shownProfile = profileId;
    showView();
}

function showProfileOverview() {
    model.app.currentPage = 'profileOverview';
    showView();
}

function showChat() {
    model.app.currentPage = 'chat';
    showView();
}

function showChatOverview() {
    model.app.currentPage = 'chatOverview';
    showView();
}

function showMyProfile() {
    model.app.currentPage = 'myProfile';
    showView();
}

function getCurrentProfile() {
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