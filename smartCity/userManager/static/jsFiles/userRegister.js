$(document).ready(function (){

        $('.submitButton').click(function(){

                username = $('.usernameInput').val();
                email = $('.emailInput').val();
                password = $('.passwordInput').val();
                confirmPassword = $('.confirmPasswordInput').val();

                if(username && email && password == confirmPassword && password){

                        $.ajax({
                                type:"POST",
                                url: 'http://danziel2.pythonanywhere.com/account/registerUser/?username=' + username + '&email=' + email + "&password=" + password,
                                succes : function(data){
                                    window.location.href = '/';
                                }

                        });
                }else{
                        console.log('FAIL')
                }
        });


        $('.expButton').click(function(){

                username = $('.usernameInput').val();
                exp = $('.expInput').val();

                if(username && exp){

                        $.ajax({
                                type:"POST",
                                url: "http://danziel2.pythonanywhere.com/account/giveExp/?username="+username+"&experience="+exp
                        });
                }
        });


});
                                

