/* --EJERCICIO 1-- */

//AJAX con POST
$(function () {
    // Capturamos el evento change del select con id "libro"
    $('#libro').on("change", function () {
        // Guardamos en una variable el select con id "capitulo"
        var capitulo = $("#capitulo");
        // Vaciamos el select para que no se aniden con otras selecciones
        capitulo.empty();
        // Obtenemos el valor de libro
        var idLibro = this.value;
        // Enviamos el post a la base de datos
        $.post("./tabConfig.php", { idLibro: idLibro }, function (data) {
            // each = foreach
            $.each(data, function (index, data) {
                var option = $("<option></option>");
                option.attr("value", data.id);
                option.text(data.nombre);
                capitulo.append(option);
            });
            console.log(data);
        }, "json");
    });
});


/* --EJERCICIO 2-- */

// AJAX con GET
// Mostramos el texto activado por defecto
$(function () {
    var targetTab = '#suntzu';
    $.ajax({
        url: './tabTextos.html',
        type: 'GET',
        success: function (data) {
            //Cargamos el texto por defecto dentro del div con id "myTabContent"
            $('#myTabContent').load('./tabTextos.html div' + targetTab);
        }
    });
});

// Traemos los textos desde tabTextos.html y los mostramos en textos.html
$(function () {
    // Decimos que la función se activa al hacer click en un boton dentro de "myTab"
    $('#myTab').on('click', 'button.active', function () {
        // Guardamos en una variable el target del boton para usarlos como id
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


/* --EJERCICIO 3-- */

// Lleva el texto a el modal y cambia la imagen segun sea la opcion seleccionada
$(function () {
    $('.listPelicula').on('click', function () {
        valor = this.value;
        $.ajax({
            type: 'GET',
            url: './dataMovies.json',
            dataType: 'json',
            contentType: 'application/json',
            cache: false,
            success: function (data) {
                $.each(data, function (id, obj) {
                    if (id == valor) {
                        $('#tituloImagen').html(obj.titulo);
                        $('#descripcionImagen').html(obj.descripcion);
                        $('#portada').css("display", "none");
                        $('#fotografia').attr('src', (obj.url));
                        $('#fotografia').css("display", "initial");
                    }
                });
            }
        });
    });
});


/* --EJERCICIO 4-- */

// Verificamos que el nombre no exista en la base de datos
$(function () {
    $('#username').on('change', function () {
        var username = $(this).val();
        var dataString = 'username=' + username;

        $.ajax({
            type: "POST",
            url: "./formConfig.php",
            data: dataString,
            success: function (data) {
                $('#result-username').html(data);
            }
        });
    });
});


/* --EJERCICIO 5-- */
// Url para llamar a la petición por ajax
// var url_listar_tabla = "./listar.php";

// $(function () {
//     // Paginador e items por página
//     paginador = $(".paginador"); //clase paginador
//     var items = 3, numeros = 4;
//     // Inicio paginador y envio por ajax para realizar la callback
//     init_paginator(paginador, items, numeros);
//     set_callback(get_data_callback_tabla_top);
//     cargaPagina(0);
// });

// Petición enviada como callback
// function get_data_callback_tabla_top() {
//     $.ajax({
//         data: {
//             limit: itemsPorPagina,
//             offset: desde,
//         },
//         type: "POST",
//         url: url_listar_tabla
//     }).done(function (data, textStatus, jqXHR) {
//         // Clave lista del json data
//         var lista = data.lista;
//         $("#tabla").html("");

//         // Actualizar las paginas
//         if (pagina = 0) {
//             creaPaginador(data.cantidad);
//         }
//         // Genera la tbody
//         $each(lista, function (ind, elem) {
//             $('<tr>' +
//                 '<td>' + elem.indice + '<td>',
//                 '<td>' + elem.nombre + '<td>',
//                 '<td>' + elem.descripcion + '<td>',
//                 '<tr>').appendTO($("#tabla"));
//         });
//     }).fail(function (jqXHR, textStatus, textError) {
//         alert("Error al relaizar la petición".textError);
//     });
// }
//url para llamar a la peticion por ajx
var url_listar_tabla = "./listar.php";

$(function () {
    //paginador e items por pagina
    paginador = $(".paginador"); //clase paginador
    var items = 3, numeros = 4;
    //inicio paginador y envio por ajax para realizar la callback
    init_paginator(paginador, items, numeros);
    set_callback(get_data_callback_tabla_top); //nombre function
    cargaPagina(0);
});

//peticion enviada como callback
function get_data_callback_tabla_top() {
    $.ajax({
        data: {
            limit: itemsPorPagina,
            offset: desde,
        },
        type: "POST",
        url: url_listar_tabla
    }).done(function (data, textStatus, jqXHR) {
        //clave lista del json data
        var lista = data.lista;
        $("#tabla").html("");

        //actualizar las paginas
        if (pagina = 0) {
            creaPaginador(data.cantidad);
        }
        //genera la tbody
        $each(lista, function (ind, elem) {
            $('<tr>' +
                '<td>' + elem.indice + '<td>',
                '<td>' + elem.nombre + '<td>',
                '<td>' + elem.descricion + '<td>',
                '<tr>').appendTO($("#tabla"));
        });
    }).fail(function (jqXHR, textStatus, textError) {
        alert("error al relaizar la peticion".textError);
    });
}