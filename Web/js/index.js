
$(document).ready(function () {
    
        $("form").submit(function (ev) {
            ev.preventDefault();
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8000/login',
                data: JSON.stringify({
                    'username': $("#txtEmail").val(),
                    'password': $("#txtPass").val()
                }),
                contentType: 'application/json',
                success: function(data){
                    //$("form").attr("action", "menu.html");
                    //location.href='menu.html';
                    if(data.error == null){
                        localStorage.setItem("api_token",data.api_token);                        
                        location.href='content.html';
                    }
                    else{
                        alert(data.error);
                    }
                    
                },
                dataType: 'json',
                error: function(data){
                   alert(data);
                }
              });
        });
    });    
    