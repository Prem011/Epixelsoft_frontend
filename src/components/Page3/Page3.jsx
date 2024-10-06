import React from 'react'

const Page3 = () => {
  return (
    <>
      <div className='mx-[4%] h-full'>
        {/* Heading Section */}
        <h1 className='text-[6vw] md:text-[3vw] font-bold text-center mt-6'>Have you ever posted any photo on social media?</h1>
        <h3 className='text-[4vw] md:text-[1.6vw] mt-[2%] text-center text-zinc-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio <br className='hidden md:block' /> quis labore saepe aperiam rem officiis?
        </h3>

        {/* Content Section */}
        <div className='w-full h-[60%] flex flex-col lg:flex-row justify-between items-center mt-[5%]'>
          
          {/* Left Column */}
          <div className='left flex flex-col w-full lg:w-[40%]'>
            <h1 className='text-xl md:text-2xl py-[1vw] font-bold'>Lorem, ipsum dolor.</h1>
            <p className='text-lg md:text-xl pb-[1vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quidem similique consequuntur repudiandae, dolorum maiores.</p>
            
            <h1 className='text-xl md:text-2xl py-[1vw] font-bold'>Lorem, ipsum dolor.</h1>
            <p className='text-lg md:text-xl pb-[1vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quidem similique consequuntur repudiandae, dolorum maiores.</p>
            
            <h1 className='text-xl md:text-2xl py-[1vw] font-bold'>Lorem, ipsum dolor.</h1>
            <p className='text-lg md:text-xl pb-[1vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quidem similique consequuntur repudiandae, dolorum maiores.</p>
          </div>
          
          {/* Right Image Section */}
          <div className='right w-full lg:w-[57%] h-[300px] lg:h-full bg-no-repeat bg-cover bg-bottom pt-[20%]'
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1455134925191-2f1a9db13902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
          </div>
        </div>
      </div>
      
      {/* Footer Bar */}
      <div className='h-[5vw] bg-zinc-200' />
    </>
  )
}

export default Page3
