import React from 'react'
import boxes from "./components/Boxes"
import "./components/style.css"
import Box from "./components/BoxUnifiedState"

function App(){
  const [squares, setSquares] = React.useState(boxes)

  function toggle(id){
    setSquares(prevSquares =>{
      return prevSquares.map((square) =>{
        return  square.id === id ? {...square, on: !square.on } : {...square} 
      })
    })
  }
  const boxesArray = squares.map((boxData) =>(
    <Box 
        key = {boxData.id} 
        on = {boxData.on}
        toggle = {toggle} 
        id ={boxData.id}
      />
  ))
  return(
    <main>
        {boxesArray}
    </main> 
  )
}
export default App;