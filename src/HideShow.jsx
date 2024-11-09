import React, { useState } from "react";
function HideShow(){
    const[Status,setStatus]=useState(false)
    return(
        <div>
            {
                Status?<h1>react</h1>:null
            }
            {/* <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button> */}
            <button onClick={()=>setStatus(!Status)}>Toggle</button>
        </div>
    )

}
export default HideShow