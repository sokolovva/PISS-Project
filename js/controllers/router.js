document.addEventListener('DOMContentLoaded', function () {
    function router() {
        var page = location.hash.slice(1);

        switch (page) {
            case 'loginRegister':
                loginRegisterController();
                break;
            case 'home':
                homeController();
                break;
            case 'help':
                faqController();
                break;
            case 'contact':          
            case 'condition':     
            case 'forUs':     
            case 'generalCondition':
                helpController();
                break;
            case 'logout':
                logoutController();
                break;
            case 'settings':
            case 'orders':
            case 'favourites':
            case 'adresses':   
            case 'cards':
                settingController();
                break;
            default:
                homeController();
                break;
        }
    }

    window.addEventListener('hashchange', router);
    router();
});