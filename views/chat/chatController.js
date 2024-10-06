function setViewChat() {
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
            sentToId: model.app.shownProfile,
            content: message,
            timeStamp: new Date().toISOString(),
        },
    );
}

function getAllMessagesBetweenUsers(profile) { // TODO: Sjekke om jeg kan bruke filter()
    let firstPerson = model.app.loggedInUser;
    let secondPerson = profile.id;
    let messageArray = [];
    for (let message of model.messages) { // Checks all messages and see if they match with current users
        if (message.sentById == firstPerson && message.sentToId == secondPerson) {
            messageArray.push(message);
        } else if (message.sentById == secondPerson && message.sentToId == firstPerson) {
            messageArray.push(message);
        }
    }
    messageArray.sort((a,b) => 
        (b.timeStamp.localeCompare(a.timeStamp)));
    return messageArray;
}

function getMostRecentMessageFromUser(profile) {
    let allMessages = getAllMessagesBetweenUsers(profile);
    return allMessages[0];
}

// Get a list with all people there are chats with, and their most recent message. Returns a list of both
// person and message, basically as a touple.
function getAllRecentUsersAndMessages() {
    let personAndMessage = [];
    for(let profile of model.profiles) {
        personAndMessage.push(
            {
                profile: profile,
                message: getMostRecentMessageFromUser(profile),
            }
        );
    }
    return personAndMessage;
}