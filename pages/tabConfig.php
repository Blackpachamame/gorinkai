<?php
include_once('conexion.php');

// Obtengo el valor del post
$id_l = $_POST['idLibro'];
$mysqli = conectar();
$obtenerdatosLibro = consultarLibro($id_l, $mysqli);
cerrarconexion($mysqli);
echo $obtenerdatosLibro;


function consultarLibro($id_l, $mysqli)
{
    // Consulta a la base de datos
    $sql = "SELECT capitulo.nombre FROM capitulo INNER JOIN libro ON capitulo.idLibro = libro.id WHERE libro.id = $id_l";
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
