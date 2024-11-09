import React, { useEffect, useState } from "react"

function Effect (){
    const [count,setCount]=useState(10);
    const [data,setdata]=useState(100);
    useEffect(()=>{
        console.warn("call with data state")
    },[data])
    useEffect(()=>{
        alert("count is"+count)
    },[count])


    return(
        <div>
            <h1>{count}</h1>
            <h1>{data}</h1>
            <button onClick={()=>setCount(count+1)}> hii</button>
            <button onClick={()=>setdata(data+1)}>hello</button>
        </div>
    )

}
export default Effect