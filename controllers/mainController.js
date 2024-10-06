showView();
function showView() {
    if (model.app.currentPage === 'profileOverview') {
        renderProfileOverviewView();
    } else if (model.app.currentPage === 'profileView') {
        renderProfileView();
    } else if (model.app.currentPage === 'login') {
        renderLoginView();
    } else if (model.app.currentPage === 'chat') {
        renderChatView();
    } else if (model.app.currentPage === 'chatOverview') {
        renderChatOverview();
    } else if (model.app.currentPage === 'myProfile') {
        renderMyProfileView();
    }
}