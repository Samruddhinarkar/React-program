import React,{Component} from 'react'
 export default class DidMount extends Component{
  constructor(){
    super();
    this.state={
        name:"samruddhi"
    }
    console.warn("constructor")
  }
  componentDidMount(){
    console.warn("componentDidMount")
  }


    render(){

        console.warn("render")     
    
  return (
    <div>
        <h5>{this.state.name}</h5>
        <button onClick={()=>this.setState({name:"pratiksha"})}>Update Name</button>
    </div>
  )
        
    }  
}