import React from 'react'

function Footer() {
  return (
    <div className='py-5'>
      <div className='h-[1px] w-full bg-gray-600 '></div>
      <div className='flex items-center justify-center flex-col mt-5  opacity-70 gap-2'>
        <h1 className='text-text'>Designed & Developed by</h1>
        <h className='text-text'>
            <span className='text-tertiary'>Udit Singh</span>
        </h>
      </div>
    </div>
  )
}

export default Footer
