
function helpNavigation() {
    $(function () {

        $('#faqButton').on('click', function (e) {
            e.preventDefault();
            location.replace('#help');
        });
        $('#contactButton').on('click', function (e) {
            e.preventDefault();
            location.replace('#contact');
        });
        $('#conditionButton').on('click', function (e) {
            e.preventDefault();
            location.replace('#condition');
        });

        $('#forUsButton').on('click', function (e) {
            e.preventDefault();
            location.replace('#forUs');
        });
        $('#generalConditionButton').on('click', function (e) {
            e.preventDefault();
            location.replace('#generalCondition');
        });

    })

}


function helpController() {

    $(function () {

        $('main').html($('#helpOptions').html() + $('#faqSection').html());
        $('main dd').toggle();
        $('main dt').on('click', function () { $(this).next().toggle() });

        helpNavigation();
    })
}

function conditionController() {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#conditionSection').html());
        helpNavigation();
    })
}

function contactController() {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#contactSection').html());
        helpNavigation();
    })
}

function checkController() {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#checkSection').html());
        helpNavigation();
    })
}

function genCondController() {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#generalCondSection').html());
        helpNavigation();
    })
}

function forUsController() {
    $(function () {
        $('main').html($('#helpOptions').html() + $('#forUsSection').html());
        helpNavigation();
    })
}