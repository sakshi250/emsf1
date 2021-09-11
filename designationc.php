<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once'./database.php';
$table='designation';
$data=json_decode(file_get_contents('php://input'));
$designation=$data->designation;
$query='insert into '.$table.'(designation) values (:designation)';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':designation',$designation);
if($stmt->execute())
{
    $response['message']='designation created';
    echo json_encode($response);
}
else
{
    $response['error message']='error occured';
    echo json_encode($response);
}
?>