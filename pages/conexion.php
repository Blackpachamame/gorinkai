<?php

// Crear conexión
function conectar()
{
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "gorinkai";
    $mysqli = new mysqli($servername, $username, $password, $dbname);
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    return $mysqli;
}


// Cerrar conexión
function cerrarconexion($mysqli)
{
    $mysqli->close();
}
