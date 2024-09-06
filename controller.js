function nextProfile(currentProfile) {

    profileView(currentProfile);
}

function viewRandomProfile() {
    profileView(profiles[Math.floor(Math.random()*profiles.length)]);
}