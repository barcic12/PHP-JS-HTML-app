<?php
include 'connect.php';
$postData = json_decode(file_get_contents("php://input"), true);
$id= $postData['id'];
if(ceil(log10($id))!=9){
     die("The ID length is not exactly 9 characters.");
}
$sql = "DELETE FROM Users WHERE id=" . $id;
try{
    $conn->query($sql);
}
catch(Exception $e){
    
    echo "Error deleting record: " . $e;

      
}
finally{
    $conn->close();
}

?>
