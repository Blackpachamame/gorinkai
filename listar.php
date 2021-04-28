<?php

//obtengo valores para la paginacion | intval — Obtiene el valor entero de una variable | isset — Determina si una variable está definida y no es null
$limit = isset($_POST["limit"]) && intval($_POST["limit"]) > 0 ? intval($_POST["limit"]) : 10;
$offset= isset($_POST["offset"]) && intval($_POST["offset"]) >= 0 ? intval($_POST["offset"]) : 0;

//conexion
$con = new mysqli("localhost", "root", "root", "paginacion");
$con->set_charset("utf8"); // el set_charset Establece el conjunto de caracteres predeterminado a usar cuando se envían datos desde y hacia el servidor de la base de datos.

//------------------------
$json = array();
$data = array();

//consulta bd
$query = $con->prepare("SELECT indice, nombre, descripcion FROM tabla limit ? offset ? ");
$query->bind_param("ii", $limit, $offset); //"ii" significa que los dos parámetros de la consulta SQL serán del tipo "Integer" representados por "i" cada uno.
//db2_bind_param — Vincula una variable PHP a un parámetro de una sentencia SQL
$query->execute();

//vincular variables a la sentencia preparada (a una declaración preparada para el almacenamiento de resultados)
$query->bind_result($indice, $nombre, $descripcion); 

//valores

while ($qeury->fetch()){
    $data_json = array();
    $data_json["indice"] = $indice;
    $data_json["nombre"] = $nombre;
    $data_json["descripcion"] = $descripcion;
    $data[]= $data_json;
}

//numero de registros
$cantidad_consulta = $con->query("SELECT COUNT(*) AS total FROM tabla");
$row= $cantidad_consulta->fetch_assoc();
$cantidad['cantidad']= $row['total'];
$json["lista"] = array_values($data);
$json["cantidad"] = array_values($cantidad);

//enviar rta por json para realizar un peticion por ajax
header ("Content-type:application/json; charset = utf-8");
echo json_encode($json);
//json_encode — Retorna la representación JSON del valor dado
exit();
