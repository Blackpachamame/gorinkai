<?php
require('conexion.php');

// Rescatar nombre
print_r($_POST);
$nombreUsuario = $_POST['username'];
$mysqli = conectar();
$obtenerNombreUsuario = consultarNombre($nombreUsuario, $mysqli);
//print_r($obtenerNombreUsuario);
cerrarconexion($mysqli);


/* if (isset($_POST)) {
     $username = (string)$_POST['nombre'];

     $result = $connexion->query(
         'SELECT nombre FROM usuario WHERE nombre = "' . strtolower($username) . '"'
     );

     if ($result->num_rows > 0) {
        echo 'El nombre de usuario ya existe';
     } else {
        echo 'Usuario disponible';
    }
 } */


function consultarNombre($nombreUsuario, $mysqli)
{
    // Consulta a la base de datos
    $sql = "SELECT nombre FROM usuario WHERE nombre = '$nombreUsuario'";
    // Envío a la consulta
    $consulta = $mysqli->query($sql);
    print_r($consulta); 
    // Verifico que la consulta es correcta
    if (!$consulta) {
        die('Consulta no válida: ');
    } else {
        $array = $consulta->fetch_all(MYSQLI_ASSOC);
        print_r($array);
        $resp = json_encode($array);
    }
    return $resp;
}



/* MANNUSHO ESTUVO ACA */
?>