function Student(props){
    console.warn(props.name)
    return(
         
        <div>
            <h3>props in react</h3>
            <h1>hello {props.name}</h1>
        </div>
        
    )
}
export default Student