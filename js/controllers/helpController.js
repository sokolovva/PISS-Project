
function faqController() {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#faqSection').html());
        $('main dd').toggle();
        $('main dt').on('click', function () { $(this).next().toggle() });
      
    })
}

function helpController() {
    $(function () {
        var page = location.hash;
        $('main').html($('#helpOptions').html() + $(page+'Section').html());
    })
}
