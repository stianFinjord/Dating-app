showView();
function showView(pushToHistory = true) {
    
    if(pushToHistory) {
        history.pushState({ appState: model.app }, null);
    }

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

// Skjønner ikke alt her
window.addEventListener('popstate', function(event) {
    if(event.state && event.state.appState) {
        model.app = event.state.appState;

        // Calls showView without pushing to history
        showView(false);
    }
});