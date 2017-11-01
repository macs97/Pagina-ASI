function tomarValores(){    
    var data = document.getElementsByClassName("fila");    
    var suma=0;
    var promedio=0;
    var restante =0;
    $.each(data, function(index, item){                        
        suma += parseInt(item.value);
    });
    promedio = suma/data.length;
    restante = 100 - promedio;
    
    document.getElementById("formulario").style.display = "none";
    document.getElementById("graficas").style.display = "block";
    generarGrafica1(data,promedio,restante);
}

function cerrarSesion(){
    localStorage.setItem("api_token","");
}

function generarGrafica1(fila,promedio,restante){
    //console.log(fila);
    var ctx = $("#grafica1");
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"],
            datasets: [{
                label: '% Items',
                data: [fila[0].value, fila[1].value, fila[2].value, fila[3].value, fila[4].value, fila[5].value, fila[6].value],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //Grafica2
    var ctx2 = $("#grafica2");
    var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ["Promedio", "Restante"],
            datasets: [{
                label: 'Promedio',
                data: [promedio, restante],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


$(document).ready(function(){    

    $("#btnGuardar").click(function(){
        alert("holas");
    })
    $("#1").click(function(ev){ 
        $("#grafica1").empty(); 
       $("#result").empty();
       $(".Boton").empty();
        ev.preventDefault();   
        document.getElementById("formulario").style.display = "block";
        document.getElementById("graficas").style.display = "none";
        resultado1();        
    });
    $("#2").click(function(ev){
        $("#result").empty();
        $(".Boton").empty();
        ev.preventDefault();
        document.getElementById("formulario").style.display = "block";
        document.getElementById("graficas").style.display = "none";
        resultado2();
    });
    $("#3").click(function(ev){
        $("#result").empty();
        $(".Boton").empty();
        ev.preventDefault();
        document.getElementById("formulario").style.display = "block";
        document.getElementById("graficas").style.display = "none";
        resultado3();
    });
    $("#4").click(function(ev){
        $("#result").empty();
        $(".Boton").empty();
        ev.preventDefault();
        document.getElementById("formulario").style.display = "block";
        document.getElementById("graficas").style.display = "none";
        resultado4();
    });
    function resultado1(){
        $.ajax({
            url: 'http://localhost:8000/1',
            type: 'GET',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('api_token' , localStorage.getItem("api_token"));
            },
            success: function(data){                            
                if(data != null && $.isArray(data)){
                    $.each(data, function(index, value){    
                        var a = index + 1;                                         
                        if(index==0){
                            $("#result").append("<thead><tr><th scope='col'>#</th><th scope='col'>Premisa</th><th scope='col'>Justificación</th><th scope='col'>Porcentaje</th></tr></thead>");
                            $("#result").append("<tbody><tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                        else{
                            $("#result").append("<tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                    });
                    $("#result").append("</tbody>");
                    $("#formulario").append("<div class='Boton'><input type='button' name='' class='btn btn-primary btn-lg' value='Guardar' id='btnGuardar' onclick='tomarValores()'></div>");
                }
            },
            error: function(error){
                alert("Debe iniciar sesión");
                location.href='index.html';
            }
        });
    }
    function resultado2(){
        $.ajax({
            url: 'http://localhost:8000/2',
            type: 'GET',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('api_token' , localStorage.getItem("api_token"));
            },
            success: function(data){                
                if(data != null && $.isArray(data)){
                    $.each(data, function(index, value){    
                        var a = index + 1;                                         
                        if(index==0){
                            $("#result").append("<thead><tr><th scope='col'>#</th><th scope='col'>Premisa</th><th scope='col'>Justificación</th><th scope='col'>Porcentaje</th></tr></thead>");
                            $("#result").append("<tbody><tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                        else{
                            $("#result").append("<tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                    });
                    $("#result").append("</tbody>");
                    $("#formulario").append("<div class='Boton'><input type='button' name='' class='btn btn-primary btn-lg' value='Guardar' id='btnGuardar' onclick='tomarValores()'></div>");
                }
            },
            error: function(error){
                alert("Debe iniciar sesión");
                location.href='index.html';
            }
        });
    }
    function resultado3(){
        $.ajax({
            url: 'http://localhost:8000/3',
            type: 'GET',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('api_token' , localStorage.getItem("api_token"));
            },
            success: function(data){                
                if(data != null && $.isArray(data)){
                    $.each(data, function(index, value){    
                        var a = index + 1; 
                        if(index==0){
                            $("#result").append("<thead><tr><th scope='col'>#</th><th scope='col'>Premisa</th><th scope='col'>Justificación</th><th scope='col'>Porcentaje</th></tr></thead>");
                            $("#result").append("<tbody><tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                        else{
                            $("#result").append("<tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                    });
                    $("#result").append("</tbody>");
                    $("#formulario").append("<div class='Boton'><input type='button' name='' class='btn btn-primary btn-lg' value='Guardar' id='btnGuardar' onclick='tomarValores()'></div>");
                }
            },
            error: function(error){
                alert("Debe iniciar sesión");
                location.href='index.html';
            }
        });
    }
    function resultado4(){
        $.ajax({
            url: 'http://localhost:8000/4',
            type: 'GET',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('api_token' , localStorage.getItem("api_token"));
            },
            success: function(data){                
                if(data != null && $.isArray(data)){
                    $.each(data, function(index, value){    
                        var a = index + 1;
                        if(index==0){
                            $("#result").append("<thead><tr><th scope='col'>#</th><th scope='col'>Premisa</th><th scope='col'>Justificación</th><th scope='col'>Porcentaje</th></tr></thead>");
                            $("#result").append("<tbody><tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                        else{
                            $("#result").append("<tr><th scope='row'>"+a+"</th><td>"+value.nombre+"</td><td><textarea name='' id='' cols='80' rows='1' class='form-control' required></textarea></td><td><input type='text' name='' class='form-control fila' required id='fila"+index+"'></td></tr>");
                        }
                    });
                    $("#result").append("</tbody>");
                    $("#formulario").append("<div class='Boton'><input type='button' name='' class='btn btn-primary btn-lg' value='Guardar' id='btnGuardar' onclick='tomarValores()'></div>");
                }
            },
            error: function(error){
                alert("Debe iniciar sesión");
                location.href='index.html';
            }
        });
    }
});


    
    
    



















/*$(document).ready(function () {
    $
});*/


