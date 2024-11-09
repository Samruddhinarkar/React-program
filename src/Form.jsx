import { useState } from "react"

function Form(){
    const [name,setname]=useState("");
    const[tnc,settnc]=useState("false");
    const[interst,setinterst]=useState("")

    function getFormData(e){
        console.warn(name,tnc,interst)
        e.preventDefault()
    }

    return(
        <div className="Form">
            <h1>react form</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter" onChange={(e)=>setname(e.target.value)}/><br></br>
                <select onChange={(e)=>setinterst(e.target.value)} >
                        <option>select Options</option>
                        <option > HTML</option>
                        <option>CSS</option>
                        <option value="">JS</option>
                    
                </select><br></br>
                <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}/><span>Accepts Tearm and condition</span><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default Form