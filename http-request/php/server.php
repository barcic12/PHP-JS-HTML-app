<?php
header("Content-Type: application/json");
$postData = json_decode(file_get_contents("php://input"), true);
$id = $postData['id'];
switch ($id) {
    case "Valid html":
        $jsonData = ["message"=> "<h2>This is HTML content</h2>"];
        echo json_encode($jsonData);
        break;
    case "valid Json":
        $jsonData = [
            "message" => "{message: This is a valid JSON reply}",
            
        ];
        echo json_encode($jsonData);
        break;
    case "invalid Server Html":
        echo http_response_code(502);
        break;

    case "Invalid client Html":
        echo http_response_code(422);
        break;
    case "invalid Json":
        
        echo "aaaa";
        break;
  
}


?>
