function homeController() {
    $(function () {
        var main = $('#mainDiv').html();
        $('main').html(main);

    })
}



function womenController(){
    $('main').html($('#filterTemplate').html());
}


function menController(){
    $('main').html($('#filterTemplate').html());

}