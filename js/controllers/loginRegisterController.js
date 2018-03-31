function loginRegisterController(){

        $(function(){

            $('main').html($('#loginTemplate').html());
            $('#registerDiv').hide();

            $('#loginButton').on('click', function(){
                $('#loginDiv').show(100);
                $('#registerDiv').hide(100);
            })

            $('#regButton').on('click', function(){
                $('#registerDiv').show(100);
                $('#loginDiv').hide(100);
            })


            $('#logIn').on('click', function(){
                
                var user = $('#user').val();
                var pass = $('#pass').val();
                var userId=userStorage.login(user, pass);
    
                if(userId){
                    location.replace('#home');
                    var profile = $('<a href="#profileManager">&nbsp;<img src="assets/images/profileIcon.png"/><br/><span class="normalWhite">МОЯТ ПРОФИЛ</span></a>');
                    $('#profile').html(profile);
                } else {
                    alert('Невалидно потребителско име/парола!');
                    return;
                }    
            })


            $('#register').on('click', function(event){
                event.preventDefault();
                var user = $('#regUser').val();
                var pass = $('#regPass').val();
    
                if(userStorage.register(user, pass)){
                    alert('Вие се регистрирахте успешно!');
                    $('#loginDiv').show(100);
                    $('#registerDiv').hide(100);
                    $('#regUser').val('');
                    $('#regPass').val('');


                } else {
                    alert('Това потребителско име вече е заето!');
                    $('#regUser').val('');
                    $('#regPass').val('');

                    return;
                }    
            })
           

        })
}
