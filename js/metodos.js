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

//AJAX con POST
// $(function () {
//     // Capturamos el evento change del select con id "libro"
//     $('#username').on('change', function () {
//         // Guardamos en una variable el select con id "capitulo"
//         var resultUsername = $("#result-username");
//         // Obtenemos el valor de libro
//         var nombre = this.value;
//         // Enviamos el post a la base de datos
//         $.post('./formConfig.php', { nombre: nombre }, function (data) {
//             // each = foreach
//             $.each(data, function (index, data) {
//                 var option = $('<option></option>');
//                 option.attr('value', data.id);
//                 option.text(data.nombre);
//                 resultUsername.append(option);
//             });
//             console.log(data);
//         }, 'json');
//     });
// });