document.addEventListener('DOMContentLoaded', function () {
    function router() {
        var page = location.hash.slice(1);

        switch (page) {
            case 'login':
                loginController();
                break;
            case 'home':
                homeController();
                break;
            case 'register':
                registerController();
                break;

            default:
                homeController();
                break;
        }
    }

    window.addEventListener('hashchange', router);
    router();
});