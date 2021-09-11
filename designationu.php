<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once'./database.php';
$table='designation';

$data=json_decode(file_get_contents('php://input'));
$id=$data->id;

$designation=$data->designation;


$query='update '.$table.' set designation=:designation where id=:id';
$stmt=$pdo->prepare($query);

$stmt->bindParam(':designation',$designation);

$stmt->bindParam(':id',$id);
if($stmt->execute())
{
    $response['message']='designation updated';
    echo json_encode($response);
}
else
{
    $response['error message']='error occured';
    echo json_encode($response);
}
?>