import React from "react"
import "../components/style.css"
/* In this context we have used local  states for each box component such that 
each box  has the ability to change state in each box component that
is rendered*/ 

function Box(props){
    
    const styles = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }
    return(
        <div 
             style = {styles} 
             className = "box" 
             onClick = {props.toggle}
            >     
        </div>
    )
}
export default Box;