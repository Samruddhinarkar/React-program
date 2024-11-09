function Child(props){
    let name ="pratiksha Jadhav"
    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={()=>props.alert(name)}>Click Me</button>
        </div>
    )
    
} export default Child