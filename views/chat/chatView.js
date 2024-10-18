function renderChatView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div class="view">
            <div class="header-container">
                <button class="back-button" onclick="setViewChatOverview()">
                    <img src="svg/back-button.svg" alt="Back">
                </button>
                <div class=chat-title onclick="setViewProfile()">Chat med ${getCurrentProfile().name}</div>
            </div>
            ${buildChatMessages()}
            <form class="send-message" onsubmit="sendChatMessage(); return false;">
                <input type="text" onchange="model.inputs.messageForm.message = this.value" placeholder="Skriv melding...">
                <button type="submit">Send</button>
            </form>
        </div>
    `
}
// displays the chat messages in the chatView
function buildChatMessages() {
    let messages = getAllMessagesBetweenUsers(model.app.shownProfileId);
    let messageClass = "";
    let html = /*HTML*/ `<div class="messageContainer">
    `
    for (let message of messages) {
        if(message.sentById == model.app.loggedInUser) {
            messageClass = "messageRight";
        } else {
            messageClass = "messageLeft";
        }
        html += /*HTML*/ `
            <div class=${messageClass}>${message.content}</div>
        `
    }
    html += /*HTML*/`</div>`;
    return html;
}