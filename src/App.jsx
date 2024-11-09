import { useState,useEffect, PureComponent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from'./Users';
import Demo from './demo';
import PonpsInClass from './PropsInClass';
import Input from './Input';
import HideShow from './HideShow';
import Form from './Form';
import Ifcondition from './Ifconditions';
import LoginValidation from './LoginValidations';
import Formic from './Formic';
import { useFormik } from "formik"
import BasicFormic from './BasicFormic';
import Effect from './Effect';
import HandleArray from './HandleArray';
import DidMount from './DidMount';
import NestetedArray from './NestetedArray';
import Child from './Child';
import MyPureComponents from './MyPureComponent';


function App() {
  let data2 ="samruddhi narkar";

useEffect(()=>{
  alert("useffect");
})

 const [data1,setdata1]=useState(0)
 function updatedata(){
  setdata1(data1+1)
 }
 console.warn(".........");

 let data="samruddhi narkar"
  function apple(){
    {
      data="Tejas Rakhawanbae"
      alert(data)
    }
  }

  function ParentAert(name){
    alert(name)
  }

  return (
    <div className="App">
      <h1>hello word</h1>
      {/* {data}  
      {data1 }     
        <Users/>
        <button onClick={apple}>Click Me</button>
        <button onClick={()=>alert("Direct Function Called")}>button</button><br></br>
        <button onClick={updatedata}> name update</button>
      
        <h2>hii</h2>
    <Demo/>
    <PonpsInClass name='pratiksha'/>
    <Input/>
    <HideShow/> 
    <Form/>
    <Ifcondition/>
    <LoginValidation/>
      <Formic/> 
      <BasicFormic/>
      <Effect/>*/}
      <HandleArray/>
      <DidMount/>
      <NestetedArray/>
      <Child alert={ParentAert}/>
      <MyPureComponents/>
    </div>

  )
}

export default App
