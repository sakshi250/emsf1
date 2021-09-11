let form=document.querySelector('#btn');

form.addEventListener('click',(e)=>{
   
   e.preventDefault();
   let Department= document.querySelector('#department').value;
   
let url='http://localhost/Ems/departmentc.php';
let data= {
    "department":Department,
};
    
    let params=JSON.stringify(data);
   let xhr=new XMLHttpRequest()
   xhr.open('POST',url,true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   xhr.onload=()=>{
    if(xhr.status==200||xhr.readyState==4)
       {
           console.log('department created ');
        }
        else
     {
           console.log('error occured');

       }


    }
    xhr.send(params);
});