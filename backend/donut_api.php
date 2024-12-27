<?php
//Uses GET request to get list of donuts from DB
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$mysqli = new mysqli("localhost", "phpuser", "donutl34der", "donutdb");

if (mysqli_connect_error()) {
    echo "Failed to connect to MariaDB: " . $mysqli->connect_error;
    die("There was an error connecting to the donuts database");
}

$query = "SELECT * FROM donuts";
$result = mysqli_query($mysqli, $query);

$donuts = array();
// array to store tuple
while ($row = mysqli_fetch_assoc($result)) {
    $donuts[] = $row;
}

echo json_encode($donuts);
// data is in JSON 
$mysqli->close();
?>