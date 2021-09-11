getemp=()=>
{
    let url='http://localhost/Ems/employeeg.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log(xhr.responseText);
            let response=JSON.parse(xhr.responseText);
            let {emp}=response;
            let tablesec=document.querySelector('#table-data-section');
            let table=document.createElement('table');
            let tablehead=document.createElement('tr');
            let idth=document.createElement('th');
            let nameth=document.createElement('th');
            let departmentth=document.createElement('th');
            let designationth=document.createElement('th');
            let salaryth=document.createElement('th');
            let idcon=document.createTextNode('id');
            let namecon=document.createTextNode('name');
            let departmentcon=document.createTextNode('department');
            let designationcon=document.createTextNode('designation');
            let salarycon=document.createTextNode('salary');
            idth.appendChild(idcon);
            nameth.appendChild(namecon);
            departmentth.appendChild(departmentcon);
            designationth.appendChild(designationcon);
            salaryth.appendChild(salarycon);
            tablehead.appendChild(idth);
            tablehead.appendChild(nameth);
            tablehead.appendChild(departmentth);
            tablehead.appendChild(designationth);
            tablehead.appendChild(salaryth);
            table.appendChild(tablehead);
            tablesec.appendChild(table);
            emp.forEach(dep => {
            let {id,name,department,designation,salary}=dep,des,sal;
            let row=document.createElement('tr');
              let idcol=document.createElement('td');
              let idcon=document.createTextNode(id);
              let namecol=document.createElement('td');
              let namecon=document.createTextNode(name);
              let depcol=document.createElement('td');
              let depcon=document.createTextNode(department);
              let descol=document.createElement('td');
              let descon=document.createTextNode(designation);
              let salcol=document.createElement('td');
              let salcon=document.createTextNode(salary);
              let deletebtn=document.createElement('button');
              let deletebtntxt=document.createTextNode('delete');
             deletebtn.appendChild(deletebtntxt);
            deletebtn.addEventListener('click',(e)=>{
                 e.preventDefault();
                 let url2='http://localhost/Ems/employeed.php';
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
              namecol.appendChild(namecon);
              depcol.appendChild(depcon);
              descol.appendChild(descon);
              salcol.appendChild(salcon);
              row.appendChild(idcol);
              row.appendChild(namecol);
              row.appendChild(depcol);
              row.appendChild(descol);
              row.appendChild(salcol);
             
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
getemp();