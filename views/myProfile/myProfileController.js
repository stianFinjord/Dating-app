function setViewMyProfile() {
    model.app.currentPage = 'myProfile';
    showView();
}

function setBioTextToModel(bioText) {
    model.inputs.profileEditForm.bio = bioText;
}

function updateBioOfLoggedInUser() {
    model.profiles[getLoggedInUserId()].bio = model.inputs.profileEditForm.bio;
    model.inputs.profileEditForm.bio = '';
}