import React from 'react'

const Item = ({icon,contact, value}) => {
  return (
    <div className='flex w-full rounded-lg p-1  justify-center items-center hover:bg-gray-50'>
       <div className='w-6 h-6 pt-1 text-violet-500'>
       {icon}
       </div>
       <div className='flex-column w-full  ml-2 justify-start'>
       <p className='flex text-xs'>{contact}</p>
        <p className='flex  font-medium text-sm'>{value}</p>
       </div>
    </div>
  )
}

export default Item