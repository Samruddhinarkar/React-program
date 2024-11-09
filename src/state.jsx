import React, { useState } from 'react'

function state(){
    
}

const state = () => {
    const[data,setdata]=useState("samruddhi")
    function updatedata(){
        data="pratiksha"
    }
    console.warn(".................")
  return (

    <div>state

        <h3>{data}</h3>
        <buttion onclick={updatedata}>updateDate</buttion>


    </div>
  )
}

export default state