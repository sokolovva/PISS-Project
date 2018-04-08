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

        var username = JSON.parse(sessionStorage.getItem('loggedUser'));

        if (username) {
            var cards = username.cards;
            var address = username.addresses;
            if (page == 'cards') {
                var cardTemplate = $('#cardsTemplate').text();
                var cardPage = Handlebars.compile(cardTemplate);
                $('#profileSection section').eq(1).html($(cardPage({ cards: cards })));
            } else {
                if (page == 'adresses') {
                    var addressTemplate = $('#adressessTemplate').text();
                    var addressPage = Handlebars.compile(addressTemplate);
                    $('#profileSection section').eq(1).html($(addressPage({ address: address })));
                } else {
                    $('#profileSection section').eq(1).html($("#" + page + "Article").html());
                }
            }

        } else {
            alert('Влезте в профила си, за да видите любимите си продукти!');
            location.replace('#loginRegister');
            return;
        }

        $('main').html($('#profileDiv').html());
        $('#profileDiv article').hide();
        $('main').html($('#profileDiv').html());
        $('#username').val(username.username);
        loadGeneralSettings(username);

        //editing or deleting existing card or address
        $('.editAddress, .editCard').on('click', editCardOrAddress);
        $('.deleteAddress, .deleteCard').on('click', deleteCardOrAddress);

        //changing settings
        $('#savePersonalInfo').on('click', changeSettings);
        $('#saveNewPass').on('click', changePass);

        //adding new card or address
        $('#addCard').on('click', addCardorAddress);
        $('#addAddress').on('click', addCardorAddress);

    })
}

function loadGeneralSettings(username) {
    $('#firstName').val(username.name);
    $('#surname').val(username.surname);
    if (username.gender == 'f') {
        $('input[value=f]').prop("checked", true);
    } else {
        $('input[value=m]').prop("checked", true);
    }
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
    loadGeneralSettings(username);

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


function deleteCardOrAddress() {
    var tr = $(this).parent().parent().remove();
    var cardOrAddress = $(this).attr('class').substring(6);
    var username = JSON.parse(sessionStorage.getItem('loggedUser'));

    if (cardOrAddress == 'Card') {
        var cardNumber = $(this).parent().parent().children().eq(1).text();
        var expirationDate = $(this).parent().parent().children().eq(2).text();
        userStorage.deleteCard(username.id, cardNumber, expirationDate);
    } else {
        var city = $(this).parent().parent().children().eq(2).text();
        var street = $(this).parent().parent().children().eq(4).text();
        userStorage.deleteAddress(username.id, city, street);
    }

}


function editCardOrAddress() {


}



function addCardorAddress() {
    var username = JSON.parse(sessionStorage.getItem('loggedUser'));
    var page = location.hash.slice(1);
    var span = $('<span>✔</span>');
    var cardOrAddress = $(this).attr('id').substring(3);
    if (cardOrAddress == 'Card') {
        var html = $('<div><p>Име: <input type="text"/></p><p>Номер <br/> на картата: <input type="text"/></p><p>Валидна до: <input type="date"/></p><p style="color:#9d0052; font-size:14px;">Всички полета са задължителни!</p></div>');
    } else {
        var html = $('<div> <p>Име: <input type="text"/></p><p>Телефонен <br/> номер: <input type="text"/></p><p>Град: <input type="text"/></p><p>Пощенски <br/> код: <input type="text"/></p><p>Улица: <input type="text"/></p><p style="color:#9d0052; font-size:14px;">Всички полета са задължителни!</p></div>');
    }
    html.append(span);
    $("#" + cardOrAddress).append(html);

    $("#" + cardOrAddress + " span").on('click', function () {
        if (cardOrAddress == 'Card') {
            var name = $("#" + cardOrAddress + " input").eq(0).val();
            var cardNumber = $("#" + cardOrAddress + " input").eq(1).val();
            var validDate = $("#" + cardOrAddress + " input").eq(2).val();
            if (name == '' || cardNumber == '' || validDate == '') {
                alert('Непопълнени задължителни полета!');
                return;
            } else {
                if (userStorage.addCard(username.id, name, cardNumber, validDate)) {
                    alert('Картата беше добавена успешно!');
                    $('#Card input').val('');
                    settingController(page);
                }
            }
        } else {
            var name = $("#" + cardOrAddress + " input").eq(0).val();
            var telephone = $("#" + cardOrAddress + " input").eq(1).val();
            var city = $("#" + cardOrAddress + " input").eq(2).val();
            var postalCode = $("#" + cardOrAddress + " input").eq(3).val();
            var street = $("#" + cardOrAddress + " input").eq(4).val();
            if (name == '' || telephone == '' || city == '' || postalCode == '' || street == '') {
                alert('Непопълнени задължителни полета!');
                return;
            } else {
                if (userStorage.addAddress(username.id, name, telephone, city, postalCode, street)) {
                    alert('Адресът беше добавен успешно!');
                    $('#Address input').val('');
                    settingController(page);
                }
            }
        }
    })
}