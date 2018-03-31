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
            default:
                homeController();
                break;
        }
    }

    window.addEventListener('hashchange', router);
    router();
});