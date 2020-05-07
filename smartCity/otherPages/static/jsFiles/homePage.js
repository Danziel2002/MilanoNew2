$(document).ready(function(){
                $.ajax({
                        type: "POST",
                        url: "http://danziel2.pythonanywhere.com/account/giveExp/?username=Danziel&experience=0",
                        success: function(data){
                                    $.cookie('username', data['username'], {path: '/' });
                                    $.cookie('exp', data['exp'], {path: '/' });
                                    $.cookie('level', data['level'], {path: '/' });
                                    $.cookie('recycle', data['recycle'], {path: '/'});
                        }
                        });
        $('.logOut').click(function() {
            $.removeCookie('username',{ path: '/' });
            $.removeCookie('exp',{ path: '/' });
            $.removeCookie('level',{ path: '/' });
            $.removeCookie('recycle',{ path: '/' });
            location.reload();
 


        });
 

});
                
