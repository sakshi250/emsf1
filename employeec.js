let form=document.querySelector('#btn');

form.addEventListener('click',(e)=>{
   
   e.preventDefault();
   
    let Name = document.querySelector('#name').value;
    let Designation= document.querySelector('#designation').value;
    let Department= document.querySelector('#department').value;
    let Salary= document.querySelector('#salary').value;

let url='http://localhost/Ems/employee.php';
let data={
    "name":Name,
    "designation":Designation,
    "department":Department,
    "salary":Salary,
};
    
    let params=JSON.stringify(data);
   let xhr=new XMLHttpRequest()
   xhr.open('POST',url,true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   xhr.onload=()=>{
    if(xhr.status==200||xhr.readyState==4)
        {
            console.log('employee created ');
        }
        else
     {
            console.log('error occured');

       }


    }
    xhr.send(params);
});