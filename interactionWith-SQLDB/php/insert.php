<?php
include 'connect.php';

$postData = json_decode(file_get_contents("php://input"), true);
$data = [
    "first_name" => $postData['firstName'],
    "last_name" => $postData['lastName'],
    "id" => $postData['id'],
];
if($data["first_name"] ==="" or $data["last_name"]==="" or ceil(log10($data["id"]))!=9){
      die("One or more fields are empty or the ID length is not exactly 9 characters.");
}
$command = "SELECT * FROM Users WHERE id=" . $data["id"];
$stmt = $conn->query($command);
if ($stmt) {
    if (mysqli_num_rows($stmt) > 0) {
         die('This record ID already exists');
    }
    }
$sql = "INSERT INTO Users (id, firstname, lastname) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("iss", $data['id'], $data['first_name'], $data['last_name']);
    if ($stmt->execute()) {
        echo " New record created successfully";
    } else {
        echo " Error executing statement: " . $stmt->error;
    }
    $stmt->close();
} else {
    echo " Error preparing statement: ";
}
$conn->close();
 ?>
