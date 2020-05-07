$(document).ready(function(){

        $('.giveExp').click(function(){

                const glassValue  = parseInt($('.glassValue').val(),10);
                const paperValue = parseInt($('.paperValue').val(),10);
                const plasticValue = parseInt($('.plasticValue').val(),10);
                
                const username = $('.usernameValue').val();

                const totalExp = (glassValue + paperValue + plasticValue)/10;
                
                $.ajax({
                        type: "POST",
                        url: "http://danziel2.pythonanywhere.com/account/giveExp/?username="+username+"&experience="+totalExp,
                        success: function(data){
                                location.reload();
                        }
                });

        });

});
                
