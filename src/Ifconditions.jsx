import React, { useState } from "react"
function Ifcondition(){
    const[logging,setlogging]=useState(1)
    return(
        <div className="Ifcondition">
        {
            // logging?<h3> welcome samruddhi</h3>:<h3>welcome pratiksha</h3> 
              logging==1?<h2>user1</h2>:logging==2?<h3>user2</h3>:<h3>User3</h3>

        }
        </div>
    )

}
export default Ifcondition