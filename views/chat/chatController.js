function setViewChat(profileId = null) {
    if(profileId) {
        model.app.shownProfileId = profileId;
    }
    model.app.currentPage = 'chat';
    showView();
}

function setViewChatOverview() {
    model.app.currentPage = 'chatOverview';
    showView();
}

function sendChatMessage() {
    message = model.inputs.messageForm.message;
    addMessageToModel(message);
    model.inputs.messageForm.message = "";
    showView();
}

function addMessageToModel(message) {
    model.messages.push(
        {
            sentById: model.app.loggedInUser,
            sentToId: model.app.shownProfileId,
            content: message,
            timeStamp: new Date().toISOString(),
        },
    );
}

function getAllMessagesBetweenUsers(profileId) { // TODO: Sjekke om jeg kan bruke filter()
    let firstPersonId = model.app.loggedInUser;
    let secondPersonId = profileId;
    let messageArray = [];
    for (let message of model.messages) { // Checks all messages and see if they match with current users
        if (message.sentById == firstPersonId && message.sentToId == secondPersonId) {
            messageArray.push(message);
        } else if (message.sentById == secondPersonId && message.sentToId == firstPersonId) {
            messageArray.push(message);
        }
    }
    messageArray.sort((a,b) => 
        (b.timeStamp.localeCompare(a.timeStamp)));
    return messageArray;
}
// Integer as parameter
function getMostRecentMessageFromUser(profileId) {
    let allMessages = getAllMessagesBetweenUsers(profileId);
    if (allMessages.length > 0) {
        return allMessages[0];
    } else {
        return null;
    }
}

// Get a list with all people there are chats with, and their most recent message. Returns a list of both
// person and message, basically as a touple.
function getAllRecentUsersAndMessages() {
    let personAndMessage = [];
    for(let profile of model.profiles) {
        if (getMostRecentMessageFromUser(profile.id) != null) {
            personAndMessage.push(
                {
                    profile: profile,
                    message: getMostRecentMessageFromUser(profile.id),
                }
            );
        }
    }
    return personAndMessage;
}