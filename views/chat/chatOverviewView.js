function renderChatOverview() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        her er overview av alle chatter
        <br>
        <button onclick="setViewProfileOverview()">Tilbake</button>
        ${buildChatPreview()}
    `
}

// Returns html of all chat previews
function buildChatPreview() {  //FIXME: Sort by date
    let usersAndMessages = getAllRecentUsersAndMessages();
    let html = `<div class="chat-overview">`;
    for (let userAndMessage of usersAndMessages) {
        html += /*HTML*/ `
        <div class="chat-preview" onclick="setViewChat(${userAndMessage.profile.id})">
            
                <img src="${getPhotoUrlFromPhotoId(userAndMessage.profile.id)}">

                <div class="chat-preview-text">
                    <h4>${userAndMessage.profile.name}, ${userAndMessage.profile.age}</h4>
                    <div>${getMostRecentMessageFromUser(userAndMessage.profile.id).content}</div>
                </div>
            </div>
            
        `;
    }
    html += `</div>`;
    return html;
}


/* function buildChatPreview() {  //FIXME: Sort by date
    let usersAndMessages = getAllRecentUsersAndMessages();
    let html = `<div class="chat-overview">`;
    for (let userAndMessage of usersAndMessages) {
        html += /*HTML*/ /*`
        <div class="chat-preview" onclick="setViewChat(${userAndMessage.profile.id})">
            <div>
                <div>
                    <img src="${getPhotoUrlFromId(userAndMessage.profile.id)}">
                </div>
                <div>
                    <h4>${userAndMessage.profile.name}, ${userAndMessage.profile.age}</h4>
                    <div>${getMostRecentMessageFromUser(userAndMessage.profile.id).content}</div>
                </div>
                    </div><br>
            </div>
            
        `;
    }
    html += `</div>`;
    return html;
} */