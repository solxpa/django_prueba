/*CREAR USUARIO O CREA TU CUENTA */

$(document).ready(function(){
    $("#validationTooltip01").on("input", function(){
        if($("#validationTooltip01").val().length >= 4){
            $("#validationTooltip01").addClass("ok");
            $("#validationTooltip01").removeClass("error");
            $("#message").html("");
        }else{
            $("#validationTooltip01").addClass("error");
            $("#validationTooltip01").removeClass("ok");
            $("#message").html("El nombre debe minino tener 4 caracteres");
        }
    });

    $("#validationTooltip02").on("input", function(){
        if($("#validationTooltip02").val().length >= 4){
            $("#validationTooltip02").addClass("ok");
            $("#validationTooltip02").removeClass("error");
            $("#message2").html("");
        }else{
            $("#validationTooltip02").addClass("error");
            $("#validationTooltip02").removeClass("ok");
            $("#message2").html("El apellido debe minino tener 4 caracteres");
        }
    });
    
    $("#validationTooltipUsername").on("input", function(){
        if($("#validationTooltipUsername").val().length >= 6){
            $("#validationTooltipUsername").addClass("ok");
            $("#validationTooltipUsername").removeClass("error");
            $("#message3").html("");
        }else{
            $("#validationTooltip02").addClass("error");
            $("#validationTooltip02").removeClass("ok");
            $("#message3").html("El usuario debe minino tener 6 caracteres");
        }
    });

    $("#validationTooltip03").on("input", function(){
        if($("#validationTooltip03").val()!=""){
            $("#validationTooltip03").addClass("ok");
            $("#validationTooltip03").removeClass("error");
            $("#message4").html("");
        }else{
            $("#validationTooltip03").addClass("error");
            $("#validationTooltip03").removeClass("ok");
            $("#message4").html("El campo ciudad es obligatorio");
        }
    });

    $("#validationTooltip05").on("input", function(){
        if($("#validationTooltip05").val().length >= 8){
            $("#validationTooltip05").addClass("ok");
            $("#validationTooltip05").removeClass("error");
            $("#message5").html("");
        }else{
            $("#validationTooltip05").addClass("error");
            $("#validationTooltip05").removeClass("ok");
            $("#message5").html("El numero de telefono deben ser 8 digitos");
        }
    });
});