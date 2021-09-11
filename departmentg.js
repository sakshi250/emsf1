getdepartment=()=>
{
    let url='http://localhost/Ems/departmentg.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log(xhr.responseText);
            let response=JSON.parse(xhr.responseText);
            let {department}=response;
            let tablesec=document.querySelector('#table-data-section');
            let table=document.createElement('table');
            let tablehead=document.createElement('tr');
            let idth=document.createElement('th');
            let departmentth=document.createElement('th');
            let idcon=document.createTextNode('id');
            let departmentcon=document.createTextNode('department');
            idth.appendChild(idcon);
            departmentth.appendChild(departmentcon);
            tablehead.appendChild(idth);
            tablehead.appendChild(departmentth);
            table.appendChild(tablehead);
            tablesec.appendChild(table);
            department.forEach(dep => {
            let {id,department}=dep;
            let row=document.createElement('tr');
              let idcol=document.createElement('td');
              let idcon=document.createTextNode(id);
              let depcol=document.createElement('td');
              let depcon=document.createTextNode(department);
              let deletebtn=document.createElement('button');
              let deletebtntxt=document.createTextNode('delete');
             deletebtn.appendChild(deletebtntxt);
            deletebtn.addEventListener('click',(e)=>{
                 e.preventDefault();
                 let url2='http://localhost/Ems/departmentd.php';
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
                        console.log('department deleted');
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
              depcol.appendChild(depcon);
              
              row.appendChild(idcol);
              row.appendChild(depcol);
             
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
getdepartment();
