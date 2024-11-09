import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

function NestetedArray(){
     const students=['sam','teja','vaishnvi','pratiksha','shakshi'];
     const stud=[
        {name:"sam",email:"abc@gmail.com",mobileno:[
            {city:"sangli",country:"India"},
            {city:"sangli",country:"India"},
            {city:"sangli",country:"India"}
        ]},
        {name:"sam",email:"abc@gmail.com",mobileno:[
            {city:"sangli",country:"India"},
            {city:"sangli",country:"India"},
            {city:"sangli",country:"India"}
        ]},
        {name:"sam",email:"abc@gmail.com",mobileno:[
            {city:"sangli",country:"India"},
            {city:"sangli",country:"India"},
            {city:"sangli",country:"India"}
        ]},
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
                 <tr key={index}>
                     <td>{index+1}</td> 
                    <td>{data.name}</td>   
                    <td>{data.email}</td>
                    <td>{
                        data.mobileno.map((item)=>
                            <tr>
                            <td>{item.city}</td>   
                            <td>{item.country}</td>
                            </tr>
                        )
                        
                        
                        }</td>
                 </tr>
                )
            
            }
            </tbody>
         </Table>

      {    
    } 
        </div>
    )

}
export default NestetedArray