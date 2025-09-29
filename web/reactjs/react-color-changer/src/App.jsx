import { useState } from "react"

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [myClr, setMyClr] = useState("black")

  return (
    <>
    <button onClick={() => setToggle(!toggle)}>Show/Hide Color Div</button>
    <h1>React color changer</h1>
    <div className="btns">
      <button onClick={()=> setMyClr("red")}>RED</button> | <button onClick={()=> setMyClr("green")}>GREEN</button> | <button onClick={()=> setMyClr("blue")}>BLUE</button> | <button onClick={()=> setMyClr("black")}>Reset</button>
    </div>
    { toggle && 
    <div style={{backgroundColor: myClr}} className="color-box">

    </div>
    }
    </>
  )
}

export default App