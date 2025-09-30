import React, { use, useEffect, useState } from 'react'

const App = () => {
  
  const [counter, setCounter] = useState(0);
  const [myText, setMyText] = useState(true);

  // useEffect(()=>{
  //   console.log("This is simple use-effect");
  // })

  useEffect(()=>{
    console.log("Triggered only first time");
  }, [])

  useEffect(()=>{
    console.log("This is simple use-effect");
  }, [counter])

  useEffect(()=>{
    console.log("Toggle text is called");
  }, [myText])

  const incCounter = () => {
    setCounter(counter+1)
  }

  const toggleText = () => {
    setMyText(!myText)
  }

  return (
    <div>App
      <h1>{counter}</h1>
      <button onClick={incCounter}>ADD</button>
      <hr />

      <button onClick={toggleText}>Click me</button>
      {myText ? <h1>Sample Text</h1> : ""}
    </div>
  )
}

export default App