import React from "react";
export default class  PropsPureComponent  extends React.PureComponent{
    constructor(){
        super();
        this.state={
            count:1
        }
        
    }
    render(){
        console.warn("rendring")
        return(
            
        <div>
            <h1>Pure Component {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me</button>
        </div>
        )
    }
}