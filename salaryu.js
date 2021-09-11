let form=document.querySelector('#btn');

form.addEventListener('click',(e)=>{
   
   e.preventDefault();
   let Id = document.querySelector('#id').value;

    let Department= document.querySelector('#department').value;
    let Salary= document.querySelector('#salary').value;

let url='http://localhost/Ems/salaryu.php';
let data={
    "id":Id,
    "department":Department,
    "salary":Salary,
};
    
    let params=JSON.stringify(data);
   let xhr=new XMLHttpRequest()
   xhr.open('PUT',url,true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   xhr.onload=()=>{
    if(xhr.status==200||xhr.readyState==4)
        {
            console.log('salary updated ');
        }
        else
     {
            console.log('error occured');

       }


    }
    xhr.send(params);
});