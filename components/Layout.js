import React from 'react'
import Navbar from './navbar'

const Layout = ({sideBard, content}) => {
  return (
    <div className='flex-col'>
      <Navbar />
    <div className='flex   w-full h-full flex-wrap'>
      <div className='flex p-4 '>{sideBard}</div>
      <div className='flex p-4 '>{content}</div>
    </div>
    </div>
  )
}

export default Layout