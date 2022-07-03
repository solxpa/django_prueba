/*AGREGAR*/
$(document).ready(function () {
    $("#inputCodigo2").on("input", function () {
        if ($("#inputCodigo2").val().length == 3) {
            $("#inputCodigo2").addClass("ok");
            $("#inputCodigo2").removeClass("error");
            $("#Message").html("")
        } else {
            $("#inputCodigo2").addClass("error");
            $("#inputCodigo2").removeClass("ok");
            $("#Message").html("El codigo debe contener 3 digitos")

        }
    });

    $("#inputProducto2").on("input", function () {
        if ($("#inputProducto2").val().length >= 6) {
            $("#inputProducto2").addClass("ok");
            $("#inputProducto2").removeClass("error");
            $("#Message2").html("")
        } else {
            $("#inputProducto2").addClass("error");
            $("#inputProducto2").removeClass("ok");
            $("#Message2").html("El nombre del producto debe ser mayor a 6 caracteres")
        }
    });
    $("#inputDesc2").on("input", function () {
        if ($("#inputDesc2").val().length >= 10) {
            $("#inputDesc2").addClass("ok");
            $("#inputDesc2").removeClass("error");
            $("#Message3").html("")
        } else {
            $("#inputDesc2").addClass("error");
            $("#inputDesc2").removeClass("ok");
            $("#Message3").html("La descripcion debe contener minimo 10 caracteres")
        }
    });
    $("#inputCategoria2").on("input", function () {
        if ($("#inputCategoria2").val() != "") {
            $("#inputCategoria2").addClass("ok");
            $("#inputCategoria2").removeClass("error");
            $("#Message4").html("")
        } else {
            $("#inputCategoria2").addClass("error");
            $("#inputCategoria2").removeClass("ok");
            $("#Message4").html("El campo categoria es obligatorio")
        }
    });
    $("#inputStock2").on("input", function () {
        if ($("#inputStock2").val().length >= 1) {
            $("#inputStock2").addClass("ok");
            $("#inputStock2").removeClass("error");
            $("#Message5").html("")
        } else {
            $("#inputStock2").addClass("error");
            $("#inputStock2").removeClass("ok");
            $("#Message5").html("El Stock debe ser mayor a 1")
        }
    });
    $("#inputDescuento2").on("input", function () {
        if ($("#inputDescuento2").val() != "") {
            $("#inputDescuento2").addClass("ok");
            $("#inputDescuento2").removeClass("error");
            $("#Message6").html("")
        } else {
            $("#inputDescuento2").addClass("error");
            $("#inputDescuento2").removeClass("ok");
            $("#Message6").html("El campo descuento es obligatorio")
        }
    });
    $("#inputPrecio2").on("input", function () {
        if ($("#inputPrecio2").val().length >= 5) {
            $("#inputPrecio2").addClass("ok");
            $("#inputPrecio2").removeClass("error");
            $("#Message7").html("")
        } else {
            $("#inputPrecio2").addClass("error");
            $("#inputPrecio2").removeClass("ok");
            $("#Message7").html("El precio debe contener minimo 5 digitos contando '$'")
        }
    });


});