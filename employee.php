<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once'./database.php';
$table='emp';

$data=json_decode(file_get_contents('php://input'));

$name=$data->name;
$designation=$data->designation;
$department=$data->department;
$salary=$data->salary;

$query='insert into '.$table.'(name,designation,department,salary) values (:name,:designation,:department,:salary)';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':name',$name);
$stmt->bindParam(':department',$department);
$stmt->bindParam(':designation',$designation);
$stmt->bindParam(':salary',$salary);
if($stmt->execute())
{
    $response['message']='employee created';
    echo json_encode($response);
}
else
{
    $response['error message']='error occured';
    echo json_encode($response);
}
?>
