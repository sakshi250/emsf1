<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once'./database.php';
$table='department';

$data=json_decode(file_get_contents('php://input'));
$id=$data->id;

$department=$data->department;


$query='update '.$table.' set department=:department where id=:id';
$stmt=$pdo->prepare($query);

$stmt->bindParam(':department',$department);

$stmt->bindParam(':id',$id);
if($stmt->execute())
{
    $response['message']='department updated';
    echo json_encode($response);
}
else
{
    $response['error message']='error occured';
    echo json_encode($response);
}
?>