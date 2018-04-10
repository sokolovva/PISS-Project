function homeController() {
    $(function () {
        var main = $('#mainDiv').html();
        $('main').html(main);

        var selectionsTemplate = $('#itemsTemplate').text();
        var selectionsPage = Handlebars.compile(selectionsTemplate);

        var items;
        var products = JSON.parse(localStorage.getItem('products'));
        items = products.filter(i => {
            return i.categories.some(c => c == 'Women');
        });

        for (var i = 0; i < items.length; i++) {
            var img = items[i].image_urls['300x400']['0'].url;
            items[i].url = img;
        }
        const RANDOM_SELECTIONS = 20;
        var random = [];
        for (var i = 0; i < RANDOM_SELECTIONS; i++) {
            var ran = items[Math.floor(Math.random() * items.length)];
            random.push(ran);
        }

        items = random.slice();

        $('#actualSelections div').eq(0).append($(selectionsPage({ items: items })));

        items = products.filter(i => {
            return i.categories.some(c => c == 'Men');
        });
        var random = [];
        for (var i = 0; i < RANDOM_SELECTIONS; i++) {
            var ran = items[Math.floor(Math.random() * items.length)];
            random.push(ran);
        }

        items = random.slice();
        for (var i = 0; i < items.length; i++) {
            var img = items[i].image_urls['300x400']['0'].url;
            items[i].url = img;
        }

        $('#actualSelections div').eq(1).append($(selectionsPage({ items: items })));
    })
}


function womenMenController(page) {

    var items = JSON.parse(localStorage.getItem('products'));
    if (page == 'women') {
        items = items.filter(i => {
            return i.categories.some(c => c == 'Women');
        });
    } else {
        items = items.filter(i => {
            return i.categories.some(c => c == 'Men');
        });
    }

    var womenMenTemplate = $('#itemsTemplate').text();
    var womenMenPage = Handlebars.compile(womenMenTemplate);
    $('main').html($('#filterTemplate').html());

    for (var i = 0; i < items.length; i++) {
        var img = items[i].image_urls['300x400']['0'].url;
        items[i].url = img;
    }

    var random = [];
    for (var i = 0; i < items.length; i++) {
        var ran = items[Math.floor(Math.random() * items.length)];
        random.push(ran);
    }

    items = random.slice();

    if (page == 'women') {
        $('#womenSelections').html($(womenMenPage({ items: items })));
        $('#womenSelections').toggle();
    } else {
        $('#menSelections').html($(womenMenPage({ items: items })));
        $('#menSelections').toggle();
    }

    /* 
        $('.items').on('click', function () {
            $('#womenSelections').toggle();
            $('#item').toggle(); */

    //replace location, with items name;
    //location.replace('#women?product=itemName');



}


function menController() {
    $('main').html($('#filterTemplate').html());
    $('#menSelections').toggle();
}