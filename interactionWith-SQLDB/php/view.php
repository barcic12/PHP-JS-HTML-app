<?php
include 'connect.php';

$sql = "select * from Users";
$result = $conn->query($sql);
while($row=$result->fetch_assoc()){
    echo "id is :".$row['id'].", first name is :".$row['firstname']
    ." and last name is :".$row['lastname'];
    echo "<br>";
}
$conn->close();
?>