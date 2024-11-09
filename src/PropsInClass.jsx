import React, { Component } from 'react'
export default class Student extends Component{
    constructor(){
        super()
        this.state={
            name:'hii'
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className="div">
                Student {this.state.name}
                <button onClick={()=>this.setState({name:'samruddhi'})}>click me</button>
            </div>
        )
    }
}