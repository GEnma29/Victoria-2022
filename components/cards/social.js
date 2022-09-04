import React from 'react'

const Social = ({ icon, link }) => {
  return (

    <a className='flex p-2 rounded-lg text-violet-500 bg-gray-200 w-8 h-8 justify-center items-center hover:bg-gray-100'
      href={link}
    >
      {icon}
    </a>
  )
}

export default Social