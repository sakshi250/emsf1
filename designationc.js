let form=document.querySelector('#btn');

form.addEventListener('click',(e)=>{
   
   e.preventDefault();
   
    
    let Designation= document.querySelector('#designation').value;
    
let url='http://localhost/Ems/designationc.php';
let data={
   
    "designation":Designation,
  
};
    
    let params=JSON.stringify(data);
   let xhr=new XMLHttpRequest()
   xhr.open('POST',url,true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   xhr.onload=()=>{
    if(xhr.status==200||xhr.readyState==4)
        {
            console.log('designation created ');
        }
        else
     {
            console.log('error occured');

       }


    }
    xhr.send(params);
});