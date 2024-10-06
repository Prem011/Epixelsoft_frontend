import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="h-[10vh] flex flex-col md:flex-row justify-between items-center mx-[3%] py-4">

      {/* Logo and title */}
      <div className="part1 flex gap-3 items-center">
        <img
          className="w-[50px] md:w-[50px]" // Keeping logo size more consistent across devices
          src="https://img.icons8.com/?size=100&id=EJd7fIRQdV6e&format=png&color=000000"
          alt="Logo"
        />
        <h1 className="text-xl md:text-3xl">Logo</h1> {/* Adjusted for better scaling on mobile */}
      </div>

      {/* Navigation links */}
      <div className="part2 flex flex-col md:flex-row gap-3 md:gap-5 text-base md:text-lg items-center mt-4 md:mt-0">
        <Link to="/" className="hover:underline">Features</Link>
        <Link to="/" className="hover:underline">Pricing</Link>
        <Link to="/" className="hover:underline">Community</Link>
        <Link to="/" className="hover:underline">Support</Link>
      </div>

      {/* Login and Register buttons */}
      <div className="part3 flex flex-col md:flex-row gap-3 md:gap-5 items-center mt-4 md:mt-0">
        <button className="px-4 py-2 text-blue-400 border border-blue-400 rounded-md hover:text-white hover:bg-blue-400 transition">
          Login
        </button>
        <button className="px-4 py-2 text-white bg-blue-400 border border-blue-400 rounded-md hover:text-blue-400 hover:bg-white transition">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
