<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit;
}
include 'mysql_conn.php';

$json = file_get_contents('php://input');
$data = json_decode($json);

$songs = $data->songs;

$sqlQuery = "INSERT INTO songs (name) VALUES ";
for($i=0; $i<count($songs); $i++) {
    if ($i == count($songs)-1){
        $sqlQuery .= "('".$songs[$i]."');";
    }else{
        $sqlQuery .= "('".$songs[$i]."'),";
    }
}

$response = array();
header('Content-Type: application/json; charset=utf-8');
/* Select queries return a resultset */
if ($mysqli->query($sqlQuery) === TRUE) {
    header("HTTP/1.1 200 OK");
    $response["status"] = "ok";
} else {
    header("HTTP/1.1 400 Bad Request");
    $response["status"] = "failed";
    $response["message"] = $mysqli->error;
}

$mysqli->close();

echo json_encode($response);
return;
?>