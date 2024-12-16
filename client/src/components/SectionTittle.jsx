import React from 'react'

function SectionTittle({
    title,
}) {
  return (
    <div className='flex gap-3 items-center '>
      <div className='w-full h-[1px] bg-tertiary'></div>
      <h1 className='text-3xl text-secondary whitespace-nowrap '>{title}</h1>
      <div className='w-full h-[1px] bg-tertiary'>
      </div>
    </div>
  )
}

export default SectionTittle
