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

        let username = $(this).val();
        let dataString = 'username=' + username;
        let cNombre = $('#nombre').attr('class');
        let cantClassNombre = cNombre.length;
        $.ajax({
            type: "POST",
            url: "./formConfig.php",
            data: dataString,
            success: function (data) {
                if (cNombre == "form-control") {
                    if (data == 0) {
                        $('#nombre').addClass(' is-valid');
                        $('#feed1').addClass('valid-feedback');
                        $('#feed1').text("Justo, justo, ese esta disponible");
                    } if (data != 0) {
                        $('#nombre').addClass(' is-invalid');
                        $('#feed1').addClass('invalid-feedback');
                        $('#feed1').text('Uh! te ganaron de mano, proba con otro a ver si tenes suerte');
                    }
                }
                if (cNombre == "form-control is-valid" || cNombre == "form-control is-invalid") {
                    if (cantClassNombre == 23) {
                        if (data == 0) {
                            $('#nombre').removeClass(' is-invalid');
                            $('#feed1').removeClass('invalid-feedback');
                            $('#nombre').addClass(' is-valid');
                            $('#feed1').addClass('valid-feedback');
                            $('#feed1').text("Justo, justo, ese esta disponible");
                        }
                    }

                    if (cantClassNombre == 21) {
                        if (data != 0) {
                            $('#nombre').removeClass(' is-valid');
                            $('#nombre').addClass(' is-invalid');
                            $('#feed1').addClass('invalid-feedback');
                            $('#feed1').text('Uh! te ganaron de mano, proba con otro a ver si tenes suerte');
                        }
                    }
                }
            }
        });
    });


    // Input: Empresa
    $(function () {
        $('#empresa').on('change', function () {
            let empresa = $(this).val();
            let cEmpresa = $('#empresa').attr('class');
            let cantClassEmpr = cEmpresa.length;
            if (cEmpresa == "form-control") {
                if (empresa != "") {
                    $('#empresa').addClass(' is-valid');
                    $('#feed2').addClass('valid-feedback');
                    $('#feed2').text('¡Muy bien! espero que te tengan en blanco');
                } else {
                    $('#empresa').addClass(' is-invalid');
                    $('#feed2').addClass('invalid-feedback');
                    $('#feed2').text('Vacío como mi corazón');
                }
            }

            if (cEmpresa == "form-control is-valid" || cEmpresa == "form-control is-invalid") {
                if (cantClassEmpr == 23) {
                    if (empresa != "") {
                        $('#empresa').removeClass(' is-invalid');
                        $('#feed2').removeClass('invalid-feedback');
                        $('#empresa').addClass(' is-valid');
                        $('#feed2').addClass('valid-feedback');
                        $('#feed2').text('¡Muy bien! espero que te tengan en blanco');
                    }
                }
                if (cantClassEmpr == 21) {
                    $('#empresa').removeClass(' is-valid');
                    $('#empresa').addClass(' is-invalid');
                    $('#feed2').addClass('invalid-feedback');
                    $('#feed2').text('Vacío como mi corazón');
                }
            }

        });
    });

    // Input: Teléfono
    $(function () {
        $('#telefono').on('change', function () {
            let telefono = $(this).val();
            let regex = /^([0-9])*$/;
            let cTel = $('#telefono').attr('class');
            let cantClassTel = cTel.length;
            if (cTel == "form-control") {
                if (regex.test(telefono)) {
                    $('#telefono').addClass(' is-valid');
                    $('#feed3').addClass('valid-feedback');
                    $('#feed3').text('Listo, esta noche te llamo');
                } else {
                    $('#telefono').addClass(' is-invalid');
                    $('#feed3').addClass('invalid-feedback');
                    $('#feed3').text('Ja, ¿vos me queres engañar? mira que la Euge te encuentra hasta en myspace eh');
                }
            }

            if (cTel == "form-control is-valid" || cTel == "form-control is-invalid") {
                if (cantClassTel == 23) {
                    if (regex.test(telefono)) {
                        $('#telefono').removeClass(' is-invalid');
                        $('#feed3').removeClass('invalid-feedback');
                        $('#telefono').addClass(' is-valid');
                        $('#feed3').addClass('valid-feedback');
                        $('#feed3').text('Listo, esta noche te llamo');
                    }
                }
                if (cantClassTel == 21) {
                    $('#telefono').removeClass(' is-valid');
                    $('#telefono').addClass(' is-invalid');
                    $('#feed3').addClass('invalid-feedback');
                    $('#feed3').text('Ja, ¿vos me queres engañar? mira que la Euge te encuentra hasta en myspace eh');
                }
            }

        });
    });

    // Input: Provincia
    $(function () {
        $('#provincia').on('change', function () {
            let provincia = $(this).val();
            let cProvincia = $('#provincia').attr('class');
            let cantClassEmpr = cProvincia.length;
            if (cProvincia == "form-control") {
                if (provincia != "") {
                    $('#provincia').addClass(' is-valid');
                    $('#feed6').addClass('valid-feedback');
                    $('#feed6').text('Ah ok...');
                } else {
                    $('#provincia').addClass(' is-invalid');
                    $('#feed6').addClass('invalid-feedback');
                    $('#feed6').text('¡Mira profe! ¡sin manos!');
                }
            }

            if (cProvincia == "form-control is-valid" || cProvincia == "form-control is-invalid") {
                if (cantClassEmpr == 23) {
                    if (provincia != "") {
                        $('#provincia').removeClass(' is-invalid');
                        $('#feed6').removeClass('invalid-feedback');
                        $('#provincia').addClass(' is-valid');
                        $('#feed6').addClass('valid-feedback');
                        $('#feed6').text('Ah ok...');
                    }
                }
                if (cantClassEmpr == 21) {
                    $('#provincia').removeClass(' is-valid');
                    $('#provincia').addClass(' is-invalid');
                    $('#feed6').addClass('invalid-feedback');
                    $('#feed6').text('¡Mira profe! ¡sin manos!');
                }
            }

        });
    });

    // Input: email
    $(function () {
        $('#mail').on('change', function () {
            let mail = $(this).val();
            let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            let cMail = $('#mail').attr('class');
            let cantClassMail = cMail.length;
            if (cMail == "form-control") {
                if (regex.test(mail)) {
                    $('#mail').addClass(' is-valid');
                    $('#feed4').addClass('valid-feedback');
                    $('#feed4').text('Uff que lindo mail, ¿te lo hiciste en el 2006?');
                } else {
                    $('#mail').addClass(' is-invalid');
                    $('#feed4').addClass('invalid-feedback');
                    $('#feed4').text('¿Cómo vas a ingresar esto? ¿ta loquito vo?');
                }
            }

            if (cMail == "form-control is-valid" || cMail == "form-control is-invalid") {
                if (cantClassMail == 23) {
                    if (regex.test(mail)) {
                        $('#mail').removeClass(' is-invalid');
                        $('#feed4').removeClass('invalid-feedback');
                        $('#mail').addClass(' is-valid');
                        $('#feed4').addClass('valid-feedback');
                        $('#feed4').text('Uff que lindo mail, ¿te lo hiciste en el 2006?');
                    }
                }
                if (cantClassMail == 21) {
                    $('#mail').removeClass(' is-valid');
                    $('#feed4').removeClass('valid-feedback');
                    $('#mail').addClass(' is-invalid');
                    $('#feed4').addClass('invalid-feedback');
                    $('#feed4').text('¿Cómo vas a ingresar esto? ¿ta loquito vo?');
                }
            }

        });
    });

    // Input: Comentario
    $(function () {
        $('#comentario').on('change', function () {
            let comentario = $(this).val();
            let cComentario = $('#comentario').attr('class');
            let cantClassComentario = cComentario.length;
            if (cComentario == "form-control") {
                if (comentario != "") {
                    $('#comentario').addClass(' is-valid');
                    $('#feed5').addClass('valid-feedback');
                    $('#feed5').text('Gracias por tu comentario :D');
                } else {
                    $('#comentario').addClass(' is-invalid');
                    $('#feed5').addClass('invalid-feedback');
                    $('#feed5').text('Che, no seas así, escribi algo. SI, A VOS TE HABLO, DALE');
                }
            }

            if (cComentario == "form-control is-valid" || cComentario == "form-control is-invalid") {
                if (cantClassComentario == 23) {
                    if (comentario != "") {
                        $('#comentario').removeClass(' is-invalid');
                        $('#feed5').removeClass('invalid-feedback');
                        $('#comentario').addClass(' is-valid');
                        $('#feed5').addClass('valid-feedback');
                        $('#feed5').text('Gracias por tu comentario :D');
                    }
                }
                if (cantClassComentario == 21) {
                    $('#comentario').removeClass(' is-valid');
                    $('#feed5').removeClass('valid-feedback');
                    $('#comentario').addClass(' is-invalid');
                    $('#feed5').addClass('invalid-feedback');
                    $('#feed5').text('Che, no seas así, escribi algo. SI, A VOS TE HABLO, DALE');
                }
            }
        });
    });


    // Btn : Reset
    $(function () {
        $('#reset').on('click', function () {

            // Reseteo de la clase Nombre.
            let classNombre = $('#nombre').attr('class');

            if (classNombre == "form-control is-valid") {
                $('#nombre').removeClass(' is-valid');
            }

            if (classNombre == "form-control is-invalid") {
                $('#nombre').removeClass(' is-invalid');
            }

            // Reseteo de la clase Empresa.
            let classEmpresa = $('#empresa').attr('class');

            if (classEmpresa == "form-control is-valid") {
                $('#empresa').removeClass(' is-valid');
            }

            if (classEmpresa == "form-control is-invalid") {
                $('#empresa').removeClass(' is-invalid');
            }

            // Reseteo de la clase Telefono.
            let classTelefono = $('#telefono').attr('class');

            if (classTelefono == "form-control is-valid") {
                $('#telefono').removeClass(' is-valid');
            }
            if (classTelefono == "form-control is-invalid") {
                $('#telefono').removeClass(' is-invalid');
            }

            // Reseteo de la clase Email.
            let classEmail = $('#mail').attr('class');

            if (classEmail == "form-control is-valid") {
                $('#mail').removeClass(' is-valid');
            }
            if (classEmail == "form-control is-invalid") {
                $('#mail').removeClass(' is-invalid');
            }

            // Reseteo de la clase Comentario.
            let classComentario = $('#comentario').attr('class');

            if (classComentario == "form-control is-valid") {
                $('#comentario').removeClass(' is-valid');
            }
            if (classComentario == "form-control is-invalid") {
                $('#comentario').removeClass(' is-invalid');
            }
        })
    })


    /* --EJERCICIO 5-- */

    $(function () {
        function loadData(page) {
            $.ajax({
                url: "./listar.php",
                type: "POST",
                cache: false,
                data: { page_no: page },
                success: function (response) {
                    $("#tabla").html(response);
                }
            });
        }

        loadData();
        // Pagination code
        $(document).on("click", ".pagination li a", function (e) {
            e.preventDefault();
            var pageId = $(this).attr("id");
            loadData(pageId);
            //SELECT * FROM users LIMIT $offset, $limit
        });
    });


    /* --EJERCICIO 6-- */

    $("#provincia").on("keyup", () => {
        $("datalist#listPro").empty();
        var value = $("#provincia").val();
        $.ajax({
            type: "GET",
            url: "./listaProvincias.php",
            data: { inicial: value },
            success: (listaPro) => {
                var list = JSON.parse(listaPro);
                list.forEach((provincia) => {
                    $("datalist#listPro").append("<option value='" + provincia.descripcion + "'>" + provincia.descripcion + "</option>");
                });
            },
        });
    });


    /* --SUBMIT-- */
    $(function () {
        $('#submit').on('click', function () {
            let classNombreVal = $('#nombre').attr('class');
            let classEmpresaVal = $('#empresa').attr('class');
            let classTelefonoVal = $('#telefono').attr('class');
            let classEmailVal = $('#mail').attr('class');
            let classComentarioVal = $('#comentario').attr('class');

            let NombreVal = $('#nombre').val();
            let EmpresaVal = $('#empresa').val();
            let TelefonoVal = $('#telefono').val();
            let EmailVal = $('#mail').val();
            let ComentarioVal = $('#comentario').val();

            if (
                classNombreVal == "form-control is-valid" &&
                classEmpresaVal == "form-control is-valid" &&
                classTelefonoVal == "form-control is-valid" &&
                classEmailVal == "form-control is-valid" &&
                classComentarioVal == "form-control is-valid"
            ) {
                $.ajax({
                    type: "POST",
                    url: "./submitConfig.php",
                    data: { nombre: NombreVal, empresa: EmpresaVal, telefono: TelefonoVal, mail: EmailVal, comentario: ComentarioVal },
                    success: function (exito) {
                        if (exito == 1) {
                            location.href = "./ok.html?mensaje=salio_todo_piola_wachin";
                        } else {
                            location.href = "./ok.html?mensaje=salio_todo_mal";
                        }
                    }
                })
            }
        });
    });
});