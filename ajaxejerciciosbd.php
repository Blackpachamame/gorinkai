<?php
//rescato el valor del post
$id_l = $_POST['idLibro'];
$mysqli = conectar();
$obtenerdatosLibro = consultarLibro($id_l, $mysqli);
cerrarconexion($mysqli);
echo $obtenerdatosLibro;


// Create connection
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

function consultarLibro($id_l, $mysqli)
{
    //consulta a la base de datos
    $sql = "SELECT capitulo.nombre FROM capitulo INNER JOIN libro ON capitulo.idLibro = libro.id WHERE libro.id = $id_l";
    //mando a la consulta
    $consulta = $mysqli->query($sql);
    //verifico que la consulta es correcta
    if (!$consulta) {
        die('Consulta no válida: ');
    } else {
        $array = $consulta->fetch_all(MYSQLI_ASSOC);
        $resp = json_encode($array);
        //print_r($resp);
        return $resp;
    }
}

function consultarNombre($nombreUsuario, $mysqli)
{
    //consulta a la base de datos
    $sql = "SELECT nombre FROM usuario WHERE nombre = $nombreUsuario";
    //mando a la consulta
    $consulta = $mysqli->query($sql);
    //verifico que la consulta es correcta
    if (!$consulta) {
        die('Consulta no válida: ');
    } else {
        $array = $consulta->fetch_all(MYSQLI_ASSOC);
        $resp = json_encode($array);
        //print_r($resp);
        return $resp;
    }
}

function cerrarconexion($mysqli)
{
    $mysqli->close();
}
