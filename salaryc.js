let form=document.querySelector('#btn');

form.addEventListener('click',(e)=>{
   
   e.preventDefault();
   
   
  
    let Department= document.querySelector('#department').value;
    let Salary= document.querySelector('#salary').value;

let url='http://localhost/Ems/salaryc.php';
let data={
    
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
            console.log('salary created ');
        }
        else
     {
            console.log('error occured');

       }


    }
    xhr.send(params);
});