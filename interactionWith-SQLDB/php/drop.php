<?php
include 'connect.php';
$postData = json_decode(file_get_contents("php://input"), true);
$name= $postData['name'];

$sql = "DROP TABLE IF EXISTS $name";





try {
    $conn->query($sql);
}
 catch(Exception $e) {
    echo "Table not found: ".$e ;
}
finally{
$conn->close();
}


?>