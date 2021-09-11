<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once'./database.php';
$table='emp';

$data=json_decode(file_get_contents('php://input'));
$id=$data->id;
$name=$data->name;
$designation=$data->designation;
$department=$data->department;
$salary=$data->salary;

$query='update '.$table.' set name=:name,department=:department,designation=:designation,salary=:salary where id=:id';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':name',$name);
$stmt->bindParam(':department',$department);
$stmt->bindParam(':designation',$designation);
$stmt->bindParam(':salary',$salary);
$stmt->bindParam(':id',$id);
if($stmt->execute())
{
    $response['message']='employee updated';
    echo json_encode($response);
}
else
{
    $response['error message']='error occured';
    echo json_encode($response);
}
?>