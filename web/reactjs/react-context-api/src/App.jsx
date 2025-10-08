import React, { useContext } from 'react'
import ShowName from './components/ShowName'
import { MyContext } from './ContextApi/ContextStore.jsx'

const App = () => {

      const data = useContext(MyContext)
  return (
    <div>App : {data.appName}
      <ShowName name="Tosiq" style={{color: "red"}}>
        <h1>This is heading in children</h1>
        <h2>This is heading 2 in children</h2>
      </ShowName>
    </div>
  )
}

export default App