function renderChatOverview() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        her er overview av alle chatter
        <br>
        <button onclick="setViewProfileOverview()">Tilbake</button>
        ${buildChatPreview(getCurrentProfile())}
    `
}

function buildChatPreview(profile) {
    let usersAndMessages = getAllRecentUsersAndMessages();
    let html = "";
    for (let userAndMessage of usersAndMessages) {
        html += /*HTML*/ `
        <div>
            ${userAndMessage.profile.name}, ${userAndMessage.profile.age}<br>
            ${getMostRecentMessageFromUser(userAndMessage.profile).content}
        </div><br>
    
    `;
    }
    return html;
}