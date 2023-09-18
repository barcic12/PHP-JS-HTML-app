<?php
include 'connect.php';
$sql = "SHOW TABLES";


$result = $conn->query($sql);


if ($result === false) {
    echo "Error: ";
} else {
    // Fetch and print the table names
    echo "Tables in the database:<br>";
    while ($row = $result->fetch_assoc()) {
        print_r($row['Tables_in_Guest3_DB']);
        echo "<br>";
    }


    $result->close();
}


$conn->close();
?>