/* EJERCICIO 1 */

$(function () {
    //AJAX con post
    //capturo evento change del select #libro
    $('#libro').on("change", function () {
        //guardo en una variable el select #capitulo
        var capitulo = $("#capitulo");
        //vacio el capitulo que estara lleno en la opcion con jason
        capitulo.empty();
        //obtengo el valor de 
        var idLibro = this.value;
        //alert("El libro es " + idLibro);
        //mando el post a la base de datos
        //si no utilizo el console.log(status), el parametro status se puede quitar
        $.post("./ajaxejerciciosbd.php", { idLibro: idLibro }, function (data, status) {
            //  console.log(status);
            /* INSERTO LA DATA EN EL capitulo /
            //$('#capitulo').html(data);
            /OPCION DE JSON */
            //each es un foreach
            $.each(data, function (index, data) {
                //console.log(data);
                var option = $("<option></option>");
                option.attr("value", data.id);
                option.text(data.nombre);
                capitulo.append(option);
            });
            console.log(data);
        }, "json");
    });
});


/* EJERCICIO 2 */

/*$(document).ready(function () {
    $("#laotse-tab").click(function () {
        $('button.nav-link.active').css({ "background-color": "#353535", "color": "#fff" });
    });
});*/


/*$("#suntzu-tab").click(function () {
    fecha = $("#suntzu").val();
    $.ajax({
        url: "proceso.php",
        type: "POST",
        data: {
            fecha: fecha,
        }
    });
});*/

/* Otra funcion del ejercicio 2 */
$(function () {
    var targetTab = '#suntzu';
    $.ajax({
        url: './tabTextos.html',
        type: 'GET',
        success: function (data) {
            $('#myTabContent').load('./tabTextos.html div' + targetTab);
        }
    });
});

/* Funcion sin nombre que hace alto en el ejercico 2 */
$(function () {
    $('#myTab').on('click', 'button.active', function () {
        var targetTab = $('button.active').attr('data-bs-target');
        $.ajax({
            url: './tabTextos.html',
            type: 'GET',
            success: function (data) {
                $('#myTabContent').load('./tabTextos.html div' + targetTab);
            }
        });
    });
});