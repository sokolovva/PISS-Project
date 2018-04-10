$(function () {
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
            case 'women':
            case 'men':
                womenMenController(page);
                break;
            case 'contact':
            case 'condition':
            case 'forUs':
            case 'generalCondition':
                helpController(page);
                break;
            case 'logout':
                logoutController();
                break;
                case 'cart':
                cartController();
                break;
            case 'settings':
            case 'orders':
            case 'favourites':
            case 'adresses':
            case 'cards':
                settingController(page);
                break;
            default:
                homeController();
                break;
        }
    }

    window.addEventListener('hashchange', router);
    router();
});