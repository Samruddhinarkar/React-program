import React ,{ Component } from "react";

 export default class Demo extends Component{
    constructor()
    {
        super();
        this.state={
            data:"samruddhi"
        }
    }
     apple ()
    {
        alert("Teja");
        
    }
    render(){
        return(
            
                <div className="demo">
                    <h1>{this.state.data}</h1>
                    <button onClick={()=>this.apple()}>update button</button>
                </div>
            
        )
    }

}