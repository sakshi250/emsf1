getdesignation=()=>
{
    let url='http://localhost/Ems/designationg.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log(xhr.responseText);
            let response=JSON.parse(xhr.responseText);
            let {designation}=response;
            let tablesec=document.querySelector('#table-data-section');
            let table=document.createElement('table');
            let tablehead=document.createElement('tr');
            let idth=document.createElement('th');
            let designationth=document.createElement('th');
            let idcon=document.createTextNode('id');
            let designationcon=document.createTextNode('designation');
            idth.appendChild(idcon);
            designationth.appendChild(designationcon);
            tablehead.appendChild(idth);
            tablehead.appendChild(designationth);
            table.appendChild(tablehead);
            tablesec.appendChild(table);
            designation.forEach(des => {
            let {id,designation}=des;
            let row=document.createElement('tr');
              let idcol=document.createElement('td');
              let idcon=document.createTextNode(id);
              let descol=document.createElement('td');
              let descon=document.createTextNode(designation);
              let deletebtn=document.createElement('button');
              let deletebtntxt=document.createTextNode('delete');
             deletebtn.appendChild(deletebtntxt);
            deletebtn.addEventListener('click',(e)=>{
                 e.preventDefault();
                 let url2='http://localhost/Ems/designationd.php';
            deletebtn.addEventListener('click',(e)=>{
                e.preventDefault();
                //let Id = document.querySelector('#id').value;
                let data={
                    "id":id
                };
                let params=JSON.stringify(data);
                let xhr=new XMLHttpRequest();
                xhr.open('DELETE',url2,true);
                xhr.onload=()=>{
                    if(xhr.status==200||xhr.readyState==4)
                    {
                        console.log('designation deleted');
                    }
                    else
                    {
                        console.log('Error occured');
                    }
                }
                xhr.send(params);
            });
                
            });
              idcol.appendChild(idcon);
              descol.appendChild(descon);
              
              row.appendChild(idcol);
              row.appendChild(descol);
             
              row.appendChild(deletebtn);
              table.appendChild(row);
        
            
            });

            
        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send();
}
getdesignation();