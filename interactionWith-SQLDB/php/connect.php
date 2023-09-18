<?php
$servername = "localhost";
$username = "Guest3_DB";
$password = "MQ0)dtJ0GIzY";
$dbname = "Guest3_DB";
try{
$conn = new mysqli($servername, $username, $password,$dbname);
$sql = "CREATE TABLE IF NOT EXISTS Users(
id INT(8) UNSIGNED PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL
)";
$conn->query($sql);
}catch(Exception $e){
    die("Connection failed: " . $conn->connect_error);
}


?>