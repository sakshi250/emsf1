let form=document.querySelector('#btn');

form.addEventListener('click',(e)=>{
   
   e.preventDefault();
   let Id = document.querySelector('#id').value;

    let Designation= document.querySelector('#designation').value;
    

let url='http://localhost/Ems/designationu.php';
let data={
    "id":Id,
    "designation":Designation,
    
};
    
    let params=JSON.stringify(data);
   let xhr=new XMLHttpRequest()
   xhr.open('PUT',url,true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   xhr.onload=()=>{
    if(xhr.status==200||xhr.readyState==4)
        {
            console.log('designation updated ');
        }
        else
     {
            console.log('error occured');

       }


    }
    xhr.send(params);
});