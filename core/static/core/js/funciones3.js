/*DESUSCRIBIRSE*/ 

$(document).ready(function(){
    $("#inputEmail4").on("input", function(){
        if($("#inputEmail4").val() != ""){
            $("#inputEmail4").addClass("ok");
            $("#inputEmail4").removeClass("error");
            $("#Mensaje").html("");
        }else{
            $("#inputEmail4").addClass("error");
            $("#inputEmail4").removeClass("ok");
            $("#Mensaje").html("Ingrese un correo valido");
        }
    });
    
    $("#inputPassword4").on("input", function(){
        if($("#inputPassword4").val().length >= 8){
            $("#inputPassword4").addClass("ok");
            $("#inputPassword4").removeClass("error");
            $("#Mensaje2").html("");
        }else{
            $("#inputPassword4").addClass("error");
            $("#inputPassword4").removeClass("ok");
            $("#Mensaje2").html("La contraseña debe contener minimo 8 caracteres");
        }
    });
    $("#inputAddress").on("input", function(){
        if($("#inputAddress").val()!=""){
            $("#inputAddress").addClass("ok");
            $("#inputAddress").removeClass("error");
            $("#Mensaje3").html("");
        }else{
            $("#inputAddress").addClass("error");
            $("#inputAddress").removeClass("ok");
            $("#Mensaje3").html("El campo Nombres es obligatorio");
        }
    });

    $("#inputAddress2").on("input", function(){
        if($("#inputAddress2").val()!= ""){
            $("#inputAddress2").addClass("ok");
            $("#inputAddress2").removeClass("error");
            $("#Mensaje4").html("");
        }else{
            $("#inputAddress2").addClass("error");
            $("#inputAddress2").removeClass("ok");
            $("#Mensaje4").html("El campo Apellidos es obligatorio");
        }
    });


});