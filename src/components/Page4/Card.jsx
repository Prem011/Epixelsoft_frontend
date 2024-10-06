import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-full flex flex-col border border-black justify-center items-center gap-[2%]'>
      
      <div className='w-full h-[200px] md:h-[300px] lg:h-[400px] bg-no-repeat bg-cover bg-bottom' 
        style={{backgroundImage: "url(https://images.unsplash.com/photo-1455134925191-2f1a9db13902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
      </div>

      <div className='p-4 md:p-6'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-bold pb-2 md:pb-3'>Lorem, ipsum dolor.</h1>
        <h3 className='text-sm md:text-base lg:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem beatae consequatur, cum ipsum accusantium.
        </h3>
      </div>
     
    </div>
  )
}

export default Card
