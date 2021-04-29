<?php
require('conexion.php');

// Rescatar nombre
print_r($_POST);
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
    // Verifico que la consulta es correcta
    if (!$consulta) {
        die('Consulta no válida: ');
    } else {
        $array = $consulta->fetch_all(MYSQLI_ASSOC);
        $resp = json_encode($array);
    }
    return $resp;
}
