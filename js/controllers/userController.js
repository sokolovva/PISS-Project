//при рефреш на страницата да се проверява дали има логнат ючър, за да не се показва ВХОД бутона
$(function () {
    $(window).on('load', function () {
        if (sessionStorage.getItem('loggedUser')) {
            var profile = $('<a href="#settings">&nbsp;<img src="assets/images/profileIcon.png"/><br/><span class="normalWhite">МОЯТ ПРОФИЛ</span></a>');
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

function settingController(page) {
    $(function () {

        $('main').html($('#profileDiv').html());
        $('#profileDiv article').hide();
        $('#profileSection section').eq(1).html($("#" + page + "Article").html());
        $('main').html($('#profileDiv').html());

        var username = JSON.parse(sessionStorage.getItem('loggedUser'));
        $('#username').val(username.username);

        //changing settings
        $('#savePersonalInfo').on('click', changeSettings);
        $('#saveNewPass').on('click', changePass);

    })
}



//ProfileManager functions
function changeSettings(event) {
    event.preventDefault();
    var firstName = $('#firstName').val();
    var surname = $('#surname').val();
    var newUsername = $('#username').val();
    var gender = $('input[name=gender]:checked').val();

    if (userStorage.changeSettings(firstName, surname, newUsername, gender)) {
        $('input[type=text]').val('');
        alert("Вашите данни бяха променени успешно!");
    } else {
        alert("Непопълнени задължителни полета!");
    }
    var username = JSON.parse(sessionStorage.getItem('loggedUser'));
    $('#username').val(username.username);

}

function changePass(event) {
    event.preventDefault();
    var oldPass = $('#currentPass').val();
    var newPass = $('#newPass').val();
    var newPass2 = $('#newPass2').val();

    if (userStorage.changePassword(oldPass, newPass, newPass2)) {
        alert("Вашата парола беше променена успешно!");
    } else {
        alert("Невалидни данни! Опитайте отново!");
    }
    $('input[type=password]').val('');
}