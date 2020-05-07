$(document).ready(function(){

        $('.sendButton').click(function(){


                let photo = $('.photoInput').val();
                
                if(photo && $.cookie('username')){

                        $.ajax({
                            type: "POST",
                            url:"http://127.0.0.1:8001/account/giveExp/?username="+$.cookie('username')+"&experience=12",
                            success: function(data){
                                
                                $.removeCookie('exp', {path: '/'});
                                $.removeCookie('level', {path: '/'});
                                
                                $.cookie('exp',data['exp'], {path: '/'});
                                $.cookie('level',data['level'], {path: '/'});
                            }
        });
                }else{
                        console.log("FAIL")
                }
        })



});
