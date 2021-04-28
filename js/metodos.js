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

/* 
Capturamos el usuario ingresado    
Verificamos que el nombre no exista en la base de datos 
Damos una devolucion en el form.
*/
$(function () {
    $('#nombre').on('change', function () {
        console.log("entre");
        let username = $(this).val();
        let dataString = 'username=' + username;

        $.ajax({
            type: "POST",
            url: "./formConfig.php",
            data: dataString,
            success: function (data) {
                console.log(data);
                cant = data.length;
                console.log("hay tantas cosas " + cant);
                if (data != []) {
                    $('#nombre').addClass(' is-valid');
                    $('#feed1').addClass('valid-feedback');
                    $('#feed1').text('Nombre valido :D eso quiere decir que nadie se le ocurrio semejante boludez.');
                } else {
                    $('#nombre').addClass(' is-invalid');
                    $('#feed1').addClass('invalid-feedback');
                    $('#feed1').text('Un poquito mas original, no? dale, pensa un poquito, no hace mal.');
                }
            }
        });
    });
});

$(function () {
    $('#empresa').on('change', function () {
        console.log("entre por la empresa POR LA EMPRESA SIIIIII");
        let empresa = $(this).val();
        if (empresa != "") {
            $('#empresa').addClass(' is-valid');
            $('#feed2').addClass('valid-feedback');
            $('#feed2').text('Muy bien! espero que te tengan en blanco');
        } else {
            $('#empresa').addClass(' is-invalid');
            $('#feed2').addClass('invalid-feedback');
            $('#feed2').text('PONE ALGO FORRO, DALE, DALE, AGUANTE INTOXICADOS');
        }
    });
});


$(function () {
    $('#telefono').on('change', function () {
        console.log("entre por el telefono HOY SE COME FAMILIA.");
        let telefono = $(this).val();
        let regex = /^([0-9])*$/;
        if (regex.test(telefono)) {
            $('#telefono').addClass(' is-valid');
            $('#feed3').addClass('valid-feedback');
            $('#feed3').text('Listo, esta noche te llamo.');
        } else {
            $('#telefono').addClass(' is-invalid');
            $('#feed3').addClass('invalid-feedback');
            $('#feed3').text('Ja, vos me queres cagar? mira que Euge te encuentra hasta en myspace eh');
        }
    });
});

$(function () {
    $('#mail').on('change', function () {
        console.log("FUA UN MAAAIL, EUGENIA PREPARA LA TARTA EUGENIA.");
        let mail = $(this).val();
        let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (regex.test(mail)) {
            $('#mail').addClass(' is-valid');
            $('#feed4').addClass('valid-feedback');
            $('#feed4').text('Uff que lindo mail, te lo hiciste en el 2006? .');
        } else {
            $('#mail').addClass(' is-invalid');
            $('#feed4').addClass('invalid-feedback');
            $('#feed4').text('Como vas a ingresar esto? ta loquito vo?');
        }
    });
});

$(function () {
    $('#comentario').on('change', function () {
        console.log("entre por el comentario COMENTARIO ESFERICO.");
        let coment = $(this).val();
        if (coment != "") {
            $('#comentario').addClass(' is-valid');
            $('#feed5').addClass('valid-feedback');
            $('#feed5').text('Muy bien, ahora gracias a esto, Krillin no morira en la proxima saga de DB.');
        } else {
            $('#comentario').addClass(' is-invalid');
            $('#feed5').addClass('invalid-feedback');
            $('#feed5').text('Dale ingresa algo, no seas asi.');
        }
    });
});





//AJAX con POST
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