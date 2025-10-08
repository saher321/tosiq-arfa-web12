import React, { useContext } from 'react'
import { MyContext } from './ContextApi/ContextStore.jsx'

const Home = () => {
    const data = useContext(MyContext)
  return (
    <div>{data.name}, {data.age}</div>
  )
}

export default Home