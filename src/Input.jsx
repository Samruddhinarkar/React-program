import React, { useState } from "react";

function Input(){
   const [data,setdata]=useState(null)
   const[print,setprint]=useState(false)

    function getdata(val){
        console.warn(val.target.value)
        setdata(val.target.value)
    }
    return(
        <div className="Input">
        {
               print?<h1>{data}</h1>:null}
            <input type="text" onChange={getdata} />
            <button onClick={()=>setprint(true)}>print data</button>
        </div>
    )

}
export default Input