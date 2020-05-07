function getCookie(name){

        const allCookies = document.cookie.split(';');

        for(let i = 0; i < allCookies.length; i++){
                let cookiePair = allCookies[i].split('=')


                if(name == cookiePair[0].trim()){
                        return decodeURIComponent(cookiePair[1])
                }
        }
}

function delete_cookie(name){
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            console.log("DASMN")
}


$(document).ready(function() {

        $('.loginButton').click(function(){

                username = $('.usernameInput').val();
                password = $('.passwordInput').val();

                if(username && password){

                        $.ajax({
                                type:"GET",
                                url:"http://127.0.0.1:8001/account/loginUser/?username="+username+"&password="+password,
                                dataType: 'json',
                                success: function(data,status, xhr){
                                    $.cookie('username', data['username'], {path: '/' });
                                    $.cookie('exp', data['exp'], {path: '/' });
                                    $.cookie('level', data['level'], {path: '/' });
                                    $.cookie('recycle', data['recycle'], {path: '/'});
                                    
                                    window.location.href = '/';
                                }
                        })
                }
        });

        $('.logoutButton').click(function(){


            $.removeCookie('username',{ path: '/' });
            $.removeCookie('exp',{ path: '/' });
            $.removeCookie('level',{ path: '/' });
            $.removeCookie('recycle',{ path: '/' });
        });

});

