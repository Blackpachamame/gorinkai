<?php
include_once('conexion.php');

// Rescatar nombre
$nombreUsuario = $_POST['username'];
$mysqli = conectar();
$obtenerNombreUsuario = consultarNombre($nombreUsuario, $mysqli);
//print_r($obtenerNombreUsuario);
cerrarconexion($mysqli);
echo $obtenerNombreUsuario;


function consultarNombre($nombreUsuario, $mysqli)
{
    // Consulta a la base de datos
    $sql = "SELECT nombre FROM usuario WHERE nombre = '$nombreUsuario'";
    // Envío a la consulta
    $consulta = $mysqli->query($sql);
    $columna = 0;
    // Verifico que la consulta es correcta
    if (!$consulta) {
        die('Consulta no válida: ');
    }
    if (gettype($consulta) != 'boolean') {
        $columna = mysqli_num_rows($consulta);
    }
    return $columna;
}
