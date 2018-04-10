/* $(function(){
    $('#mainMenu-women').hover(function(){
        $('#mainMenuW').toggle();
    });

    $('#mainMenu-men').hover(function () {
        $('#mainMenuM').toggle();
    });

    $('#mainMenu-brands').hover(function () {
        $('#mainMenuB').toggle();
    });


    $('.filters').on('click', function () {

        var genders = [];
        $('input[name=genderFilter]:checked').each(function () {
            genders.push($(this).val());
        });


        var categories = [];
        $('input[name=categoryFilter]:checked').each(function () {
            categories.push($(this).val());
        });


        var brands = [];
        $('input[name=brandFilter]:checked').each(function () {
            brands.push($(this).val());
        });

        var filter = {gender: genders, category: categories, brand: brands};
        console.log(filter);

        var result = productStorage.filterSelectedProducts(filter);
        console.log(result);

    });
});
 */
 