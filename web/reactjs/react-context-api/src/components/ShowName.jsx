import React from 'react'

const ShowName = ({style ,children, name}) => {
  return (
    <div style={style}>
        <div>This is name: {name}</div>
        <div>This is children data: {children}</div>
    </div>
  )
}

export default ShowName