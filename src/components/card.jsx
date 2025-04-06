import React from 'react'
import logo from '../../public/logo.png'

const card = () => {
  return (
    <div className='min-w-[120px] min-h-[140px] rounded-2xl bg-blue-400'>
       <img src={logo} alt="" className='object-contain rounded-md'  />
    </div>
  )
}

export default card
