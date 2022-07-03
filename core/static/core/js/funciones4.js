/*INICIAR SESION O SINGUP */


$(document).ready(function(){
    $("#floatingInput").on("input", function(){
        if($("#floatingInput").val() != ""){
            $("#floatingInput").addClass("ok");
            $("#floatingInput").removeClass("error");
            $("#Memsaje").html("");
        }else{
            $("#floatingInput").addClass("error");
            $("#floatingInput").removeClass("ok");
            $("#Memsaje").html("El campo correo es obligatorio");
        }
    });
    
    
    $("#floatingPassword").on("input", function(){
        if($("#floatingPassword").val()!="" ){
            $("#floatingPassword").addClass("ok");
            $("#floatingPassword").removeClass("error");
            $("#Mensaje2").html("");
        }else{
            $("#floatingPassword").addClass("error");
            $("#floatingPassword").removeClass("ok");
            $("#Mensaje2").html("El campo contraseña es obligatorio");
        }
    });
    
});