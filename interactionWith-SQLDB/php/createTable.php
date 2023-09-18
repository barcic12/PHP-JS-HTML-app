<?php
include 'connect.php';
$postData = json_decode(file_get_contents("php://input"), true);
$table_name= $postData['tableName'];
$field_1= $postData['field1'];
print_r($table_name);
print_r($field_1);



$sql = "CREATE TABLE IF NOT EXISTS `$table_name` (
    id INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `$field_1` VARCHAR(30) NOT NULL
)";
try{
    $conn->query($sql);
    echo "Table created";
}

catch(Exception $e){
    echo "Error creating record: ".$e;
}
finally{
    $conn->close();
}
?>