import React from 'react'

const Container = ({children}) => {
  return (
   <div className="mx-auto max-w-7xl ">

      <div className="mx-auto max-w-7xl justify-start">{children}</div>
    </div>
  )
}

export default Container