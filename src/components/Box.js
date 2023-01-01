import React from "react"
import "../components/style.css"
/* In this context we have used states for each box component such that 
each box  has the ability to change state in each box component that
is rendered*/ 

function Box(props){
    const [on, setOn]  = React.useState(props.on) 
    
    function toggle(){
        setOn(prevOn => {
            return !prevOn
        })
    }
    const styles = {
        backgroundColor : on ? "#222222" : "transparent"
    }
    return(
        <div 
             style = {styles} 
             className = "box" 
             onClick = {toggle}
            >     
        </div>
    )
}
export default Box;