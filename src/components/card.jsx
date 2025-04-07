import React from 'react'
import logo from '../../public/logo.png'

const card = () => {
  return (
    <div className=' min-w-[80px] min-h-[60px] md:min-w-[120px] md:min-h-[140px] rounded-2xl bg-blue-400'>
       <img src={logo} alt="" className='object-contain rounded-md'  />
    </div>
  )
}

export default card
