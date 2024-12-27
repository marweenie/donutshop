<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$mysqli = new mysqli("localhost", "phpuser", "donutl34der", "donutdb");

if (mysqli_connect_error()) { //Check if error connecting 
    echo json_encode("Failed to connect to MariaDB: " . $mysqli->connect_error);
die();
}
//at this point, there was no error in connecting

$method = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? $_GET['id'] : null;

//ids help as primary key, to handle post put and delete operations 
//to the proper donut

$data = json_decode(file_get_contents("php://input"), true); // Getting the JSON input

if ($method === 'POST') {
    $name = $data['name'];
    $description = $data['description'];
    $price = $data['price'];

    $query = "INSERT INTO donuts (Name, Description, Price) VALUES ('$name', '$description', '$price')";
    $result = mysqli_query($mysqli, $query);
    if ($result) {
        echo json_encode(["message" => "Donut added successfully"]);
    } else {
        echo json_encode(["error" => "Failed to add donut"]);
    }
    
} elseif ($method === 'PUT' && $id) { 
    $name = $data['name'];
    $description = $data['description'];
    $price = $data['price'];

    $query = "UPDATE donuts SET Name='$name', Description='$description', Price='$price' WHERE ID=$id";
    $result = mysqli_query($mysqli, $query);
    if ($result) {
        echo json_encode(["message" => "Donut updated successfully"]);
    } else {
        echo json_encode(["error" => "Failed to update donut"]);
    }
    
} elseif ($method === 'DELETE' && $id) {
    $query = "DELETE FROM donuts WHERE ID=$id";
    $result = mysqli_query($mysqli, $query);
    if ($result) {
        echo json_encode(["message" => "Donut deleted successfully"]);
    } else {
        echo json_encode(["error" => "Failed to delete donut"]);
    }
    
} else {
    echo json_encode(["error" => "Unsupported request method or missing ID"]);
}

$mysqli->close();
?>