import React from 'react';
import NavigationBar from './NavigationBar';

const Page1 = () => {
  return (
    <>
      <NavigationBar />

      <div
        className="h-[60vh] bg-red-400 flex flex-col justify-center items-center bg-no-repeat bg-cover bg-bottom gap-4 pt-[20%] md:gap-[5%] md:pt-[10%] bg-[url(https://plus.unsplash.com/premium_photo-1664372145628-d3fbda26a258?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
      >
        <h1 className="text-[6vw] md:text-[3.5vw] text-white text-center px-4">
          The largest community of photo enthusiasts
        </h1>
        <button className="px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl rounded-md text-white  bg-blue-400 hover:text-blue-400 hover:border hover:border-blue-400 hover:bg-white">
          Join Today
        </button>
      </div>

      <h1 className="text-[5vw] md:text-[3vw] font-semibold mt-[8%] md:mt-[5%] ml-[6%] md:ml-[4%] text-center md:text-left">
        Snap Photos and share like
        <br />
        never before
      </h1>
    </>
  );
};

export default Page1;
