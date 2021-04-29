<?php

// Connect database 
require_once('conexion.php');
$mysqli = conectar();

$limit = 5;

if (isset($_POST['page_no'])) {
    $page_no = $_POST['page_no'];
} else {
    $page_no = 1;
}

$offset = ($page_no - 1) * $limit;
$sql = "SELECT * FROM tabla LIMIT $offset, $limit";
$result = $mysqli->query($sql);
$output = "";

if (mysqli_num_rows($result) > 0) {

    $output .= "<table class='table'>
		    <thead>
		        <tr>
		           <th>Indice</th>
    	           <th>Nombre</th>
			       <th>Descripcion</th>
	                 </tr>
		    </thead>
	         <tbody>";
    while ($row = mysqli_fetch_assoc($result)) {

        $output .= "<tr>
	            <td>{$row['indice']}</td>
	            <td>{$row['nombre']}</td>
	            <td>{$row['descripcion']}</td>
		 </tr>";
    }
    $output .= "</tbody>
		</table>";

    $sql2 = "SELECT * FROM tabla";

    // Vuelve a mostrar error con esta funcion predeficinida
    $records = $mysqli->query($sql2);
    $totalRecords = mysqli_num_rows($records);
    $totalPage = ceil($totalRecords / $limit);

    $output .= "<ul class='pagination justify-content-center' style='margin:20px 0'>";

    for ($i = 1; $i <= $totalPage; $i++) {
        if ($i == $page_no) {
            $active = "active";
        } else {
            $active = "";
        }
        $output .= "<li class='page-item $active'><a class='page-link' id='$i' href=''>$i</a></li>";
    }
    $output .= "</ul>";
    echo $output;
}
