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
                helpController();
                break;
            case 'contact':
                contactController();
                break;
            case 'condition':
                conditionController();
                break;
            case 'forUs':
                forUsController();
                break;
            case 'generalCondition':
                genCondController();
                break;
            case 'profileManager':
                profileController();
                break;
            case 'logout':
                logoutController();
                break;
            case 'settings':
                settingController();
                break;
            case 'orders':
                ordersController();
                break;
            case 'favourites':
                favouritesController();
                break;
            case 'adresses':
                addressesController();
                break;
            case 'cards':
                cardsController();
                break;
            default:
                homeController();
                break;
        }
    }

    window.addEventListener('hashchange', router);
    router();
});