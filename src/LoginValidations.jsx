import React, { useState } from "react"
function LoginValidation(){
    const[user,setuser]=useState("")
    const[password,setpassword]=useState("")
    const[userErr,setuseErr]=useState(false)
    const[passErr,setpassErr]=useState(false)
    
    function getdata(e){
        if(user.length>2 || password.length>5){
            alert("type correct values")
        }
        else{
            alert("all good")
        }
       e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<2)
        {
            setuseErr(true)
        }
        else{
            setuseErr(false)
        }
        setuser(item)


    }
    function passhandler(e){
     let item=e.target.value;
        if(item.length<5)
        {
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setpassword(item)
    }
    return(
        <div className="div">
            <h1>Form Basic Validation</h1>
            <form onSubmit={getdata}>
                <input type="text" placeholder="Enter your Id" onChange={userHandler}/> 
                <br></br>{userErr?<span>invalid userid</span>:""}
                <br></br>   
                <input type="text" placeholder="Enter your password" onChange={passhandler}/>
                <br></br>{passErr?<span>invalid PAssword</span>:""}
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
       
    )

}
export default LoginValidation