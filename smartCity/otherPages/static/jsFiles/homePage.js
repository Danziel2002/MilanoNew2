$(document).ready(function(){

                                    $.cookie('username', data['username'], {path: '/' });
                                    $.cookie('exp', data['exp'], {path: '/' });
                                    $.cookie('level', data['level'], {path: '/' });
                                    $.cookie('recycle', data['recycle'], {path: '/'});
        $('.logOut').click(function() {
            $.removeCookie('username',{ path: '/' });
            $.removeCookie('exp',{ path: '/' });
            $.removeCookie('level',{ path: '/' });
            $.removeCookie('recycle',{ path: '/' });
            location.reload();
 


        });
 

});
                
