$(function () {
    function itemsHash(){
        var pages = location.hash.split('=');
        var page = pages[0].slice(1);
        var item=pages[1];
        if(page=='item'){
            itemController(item);   
        }
        
    }
    function router() {

        itemsHash();
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
            case 'Women':
            case 'Men':
                productController(page);
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
    window.addEventListener('load', router);
    router();
});