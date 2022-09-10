<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit;
}
include 'mysql_conn.php';

$json = file_get_contents('php://input');
$data = json_decode($json);

$message = $data->message;

$sqlQuery = "INSERT INTO messages (name, text) VALUES ";
$sqlQuery .= "('".$message->name."', '".$message->text."');";

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