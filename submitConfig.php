<?php
include_once('conexion.php');

// Rescatar nombre
$usuario['nombre'] = $_POST['nombre'];
$usuario['empresa'] = $_POST['empresa'];
$usuario['telefono'] = $_POST['telefono'];
$usuario['mail'] = $_POST['mail'];
$usuario['comentario'] = $_POST['comentario'];
$mysqli = conectar();
$obtenerUsuario = consultar($usuario, $mysqli);
//print_r($obtenerUsuario);
cerrarconexion($mysqli);
echo $obtenerUsuario;


function consultar($usuario, $mysqli)
{
    // Consulta a la base de datos
    $sql = "INSERT INTO usuario(nombre, empresa, telefono, email, comentario) 
    VALUES ('{$usuario['nombre']}','{$usuario['empresa']}',{$usuario['telefono']},'{$usuario['mail']}','{$usuario['comentario']}')";
    // Envío a la consulta
    $consulta = $mysqli->query($sql);
    // Verifico que la consulta es correcta
    if (!$consulta) {
        die('Consulta no válida');
    }
    // Devuelve 0 si es falso, 1 si es verdadero
    return $consulta;
}
