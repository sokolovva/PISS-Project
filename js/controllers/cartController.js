function cartController() {
    if ((sessionStorage.getItem('cart') != null) && (JSON.parse(sessionStorage.getItem('cart')).length > 0)) {
        var products = JSON.parse(sessionStorage.getItem('cart'));

        var cartSource = $('#cartTemplate').html();
        var cartTemplate = Handlebars.compile(cartSource);

        var cartHTML = cartTemplate({item: products});
        $('main').html(cartHTML);


        $('input.changeQuantity').on('change',function(){
            var cartItemId = $(this).closest('tr').attr('id');
            var newQuantity = $(this).val();
            cartStorage.changeCartItem(cartItemId, newQuantity);
            cartController();
        });


        $('.deleteItem').on('click',function(){
            var cartItemId = $(this).closest('tr').attr('id');
            cartStorage.removeCartItem(cartItemId);
            cartController();
        });


        $('#purchaseBut').on('click', function(){
            var userId = JSON.parse(sessionStorage.getItem('loggedUser')).id;
            userStorage.purchase(userId);
            cartStorage.emptyCart();
            alert('Вашата поръчка е осъществена успещно!');
            location.replace('#home');
        });


    } else {
        var emptyCartText = ' <p style="font-size:25px; position:relative; top:160px; left:480px">Вашата количка е празна!</p>\n' +
            '        <button style="float:right; position:relative; top:130px" onclick="(function(){location.replace(\'#home\')})();">\n' +
            '            Разгледайте нашите продукти\n' +
            '        </button>';
        console.log(emptyCartText);
        $('main').html(emptyCartText);
    }
}