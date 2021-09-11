<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once'./database.php';
$table='department';
$data=json_decode(file_get_contents('php://input'));
$department=$data->department;
$query='insert into '.$table.'(department) values (:department)';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':department',$department);
if($stmt->execute())
{
    $response['message']='department created';
    echo json_encode($response);
}
else
{
    $response['error message']='error occured';
    echo json_encode($response);
}
?>