
function faqController() {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#faqSection').html());
        $('main dd').toggle();
        $('main dt').on('click', function () { $(this).next().toggle() });

    })
}

function helpController(page) {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#' + page + 'Section').html());
    })
}


function cartController() {
    $(function () {
        var user = sessionStorage.getItem('loggedUser');
        if (user) {

        } else {
            alert('Влезте в профила си, за да започнете пазаруването!');
            location.replace('#loginRegister');
            return;
        }
    })

}
