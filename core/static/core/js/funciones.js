/*EDITAR*/

$(document).ready(function(){
    $("#inputProducto").on("input", function(){
        if($("#inputProducto").val().length >= 6){
            $("#inputProducto").addClass("ok");
            $("#inputProducto").removeClass("error");
            $("#mensaje2").html("");
        }else{
            $("#inputProducto").addClass("error");
            $("#inputProducto").removeClass("ok");
            $("#mensaje2").html("El nombre debe minino tener 6 caracteres");
        }
    });

    $("#inputCodigo").on("input", function(){
        if($("#inputCodigo").val().length == 3){
            $("#inputCodigo").addClass("ok");
            $("#inputCodigo").removeClass("error");
            $("#mensaje").html("")
        }else{
            $("#inputCodigo").addClass("error");
            $("#inputCodigo").removeClass("ok");
            $("#mensaje").html("El codigo debe contener 3 digitos")
        }
    });
    $("#inputDesc").on("input", function(){
        if($("#inputDesc").val().length >= 10){
            $("#inputDesc").addClass("ok");
            $("#inputDesc").removeClass("error");
            $("#mensaje3").html("")
        }else{
            $("#inputDesc").addClass("error");
            $("#inputDesc").removeClass("ok");
            $("#mensaje3").html("La descripcion debe contener minimo 10 caracteres")
        }
    });
    $("#inputCategoria").on("input", function(){
        if($("#inputCategoria").val() != ""){
            $("#inputCategoria").addClass("ok");
            $("#inputCategoria").removeClass("error");
            $("#mensaje4").html("")
        }else{
            $("#inputCategoria").addClass("error");
            $("#inputCategoria").removeClass("ok");
            $("#mensaje4").html("El campo categoria es obligatorio")
        }
    });
    $("#inputStock").on("input", function(){
        if($("#inputStock").val().length >=1){
            $("#inputStock").addClass("ok");
            $("#inputStock").removeClass("error");
            $("#mensaje5").html("")
        }else{
            $("#inputStock").addClass("error");
            $("#inputStock").removeClass("ok");
            $("#mensaje5").html("El Stock debe ser mayor a 1")
        }
    });
    $("#inputDescuento").on("input", function(){
        if($("#inputDescuento").val() != ""){
            $("#inputDescuento").addClass("ok");
            $("#inputDescuento").removeClass("error");
            $("#mensaje6").html("")
        }else{
            $("#inputDescuento").addClass("error");
            $("#inputDescuento").removeClass("ok");
            $("#mensaje6").html("El campo descuento es obligatorio")
        }
    });
    $("#inputPrecio").on("input", function(){
        if($("#inputPrecio").val().length >= 5){
            $("#inputPrecio").addClass("ok");
            $("#inputPrecio").removeClass("error");
            $("#mensaje7").html("")
        }else{
            $("#inputPrecio").addClass("error");
            $("#inputPrecio").removeClass("ok");
            $("#mensaje7").html("El precio debe contener minimo 5 digitos contando '$'")
        }
    });
    
   
    

});

