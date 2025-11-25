import React from 'react'
import RepairNavbar from '../components/RepairNavbar'
import RepairFooter from '../components/RepairFooter'

const WebLayout = ({children}) => {
  return (
    <>
    <RepairNavbar />
    <div>
      {children}
    </div>
    <RepairFooter />
    </>
  )
}

export default WebLayout