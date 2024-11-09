import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

function HandleArray(){
     const students=['sam','teja','vaishnvi','pratiksha','shakshi'];
     const stud=[
        {name:"sam",email:"abc@gmail.com",mobileno:11111},
        {name:"sam",email:"abc@gmail.com",mobileno:11111},
        {name:"sam",email:"abc@gmail.com",mobileno:1112}
     ]
     students.map((item)=>{
        console.warn('my name is',item)
     })
    return(
        <div>
        <h4>Handle Array</h4>
         <Table  striped variant="dark">
        <thead>
        <tr>
         <th> Id</th>
          <th> Name</th>
          <th>email</th>
          <th>mobile no</th>
        </tr>
      </thead>
      <tbody>
            {
                 stud.map((data,index)=>
                  data.mobileno===11111 ?
                 <tr key={index}>
                     <td>{index}</td> 
                    <td>{data.name}</td>   
                    <td>{data.email}</td>
                    <td>{data.mobileno}</td>
                 </tr>:null
                )
            
            }
            </tbody>
         </Table>

      {    
    } 
        </div>
    )

}
export default HandleArray