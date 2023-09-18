<?php
include 'connect.php';
$postData = json_decode(file_get_contents("php://input"), true);
$data = [
    "first_name" => $postData['firstName'],
    "last_name" => $postData['lastName'],
    "id" => $postData['id'],
];
if(ceil(log10($data["id"]))!=9){
     die("The ID length is not exactly 9 characters.");
}
$sql = "UPDATE Users SET firstname='{$data['first_name']}',
lastname='{$data['last_name']}' WHERE id={$data['id']}";
try{
  $conn->query($sql); 
    }
catch(Exception $e){
  echo "Error updating record: " .  $e;
}
finally{
  $conn->close();
}

?>