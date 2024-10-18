function getCurrentProfile() { //FIXME: Se på forslag under og ta høyde for manglende verdi
    // return model.profiles.find(profile => profile.id == model.app.shownProfile)
    
    for (let profile of model.profiles) {
        if(profile.id == model.app.shownProfileId) {
            return profile;
        }
    }
}

function getLoggedInUserId() {
    return model.app.loggedInUser;
}

function getPhotoUrlFromPhotoId(photoId) {
    let url = "photos/" + photoId + ".jfif";
    return url;
}