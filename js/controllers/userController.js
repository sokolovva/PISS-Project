$(function () {
    $(window).on('load', function () {
        if (sessionStorage.getItem('loggedUser')) {
            var profile = $('<a href="#profileManager">&nbsp;<img src="assets/images/profileIcon.png"/><br/><span class="normalWhite">МОЯТ ПРОФИЛ</span></a>');
            $('#profile').html(profile);
        };
    });
})


function logoutController() {
    $(function () {
        userStorage.logout();
        location.replace('#home');
        var profile = $('<a href="#loginRegister">&nbsp;<img src="assets/images/profileIcon.png"/><br/><span class="normalWhite">ВХОД</span></a>');
        $('#profile').html(profile);
    })
};

function settingController() {
    $(function () {
        $('#profileSection section').html($('#settingsArticle').html());
    })
}


function cardsController() {
    $(function () {
        $('#profileSection section').html($('#cardsArticle').html());
    })
}

function addressesController() {
    $(function () {
        $('#profileSection section').html($('#addressesArticle').html());
    })
}

function favouritesController() {
    $(function () {
        $('#profileSection section').html($('#favouritesArticle').html());
    })
}

function ordersController() {
    $(function () {
        $('#profileSection section').html($('#ordersArticle').html());
    })
}

