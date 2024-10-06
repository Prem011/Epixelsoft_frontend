import React from 'react'
import Card from './Card'

const Page4 = () => {
  return (
   <>
    <div className='mx-[5%] h-full'>

      <h1 className='text-[6vw] md:text-[3vw] font-bold text-center mt-[6%]'>Make your photos more stylish</h1>
      <h3 className='text-[4vw] md:text-[1.8vw] text-zinc-700 mt-[2%] text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illo beatae expedita impedit
        <br className='hidden md:block' /> consequatur, soluta omnis.
      </h3>

      <div className='flex flex-col md:flex-row gap-[6%] md:gap-[4%] justify-center items-center w-full h-auto mt-[5%]'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>

    <div className='h-[10vw] md:h-[5vw] bg-zinc-200' />
   </>
  )
}

export default Page4
