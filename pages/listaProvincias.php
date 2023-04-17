<?php
include_once('conexion.php');

// Obtengo el valor del post
$provincia = $_GET['inicial'];
$mysqli = conectar();
$obtenerdatosProvincia = consultarProvincia($provincia, $mysqli);
cerrarconexion($mysqli);
echo $obtenerdatosProvincia;


function consultarProvincia($provincia, $mysqli)
{
    // Consulta a la base de datos
    $sql = "SELECT descripcion FROM estados WHERE descripcion LIKE '$provincia%'";
    // Envío a la consulta
    $consulta = $mysqli->query($sql);
    // Verifico que la consulta es correcta
    if (!$consulta) {
        die('Consulta no válida: ');
    } else {
        $array = $consulta->fetch_all(MYSQLI_ASSOC);
        $resp = json_encode($array);
        //print_r($resp);
        return $resp;
    }
}
