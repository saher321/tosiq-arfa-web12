import { useState } from "react"
import useToggle from "./hooks/useToggle"

const App = () => {
  // const [toggle, setToggle] = useState(true)
  const [val, toggle] = useToggle(); // custom hook
  const [myClr, setMyClr] = useState("black")

  return (
    <>
    <button onClick={toggle}>Show/Hide Color Div</button>
    <h1>React color changer</h1>
    <div className="btns">
      <button onClick={()=> setMyClr("red")}>RED</button> | <button onClick={()=> setMyClr("green")}>GREEN</button> | <button onClick={()=> setMyClr("blue")}>BLUE</button> | <button onClick={()=> setMyClr("black")}>Reset</button>
    </div>
    { val && 
    <div style={{backgroundColor: myClr}} className="color-box">

    </div>
    }
    </>
  )
}

export default App