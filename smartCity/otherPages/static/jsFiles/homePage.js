$(document).ready(function(){
        $('.logOut').click(function() {
            $.removeCookie('username',{ path: '/' });
            $.removeCookie('exp',{ path: '/' });
            $.removeCookie('level',{ path: '/' });
            $.removeCookie('recycle',{ path: '/' });
            location.reload();
 


        });
 

});
                
