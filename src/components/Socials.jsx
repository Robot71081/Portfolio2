import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='flex items-center justify-around  p-4 rounded-t-lg shadow-lg '>
    <div className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <FaXTwitter />
    </div>
</div>

<div className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <FaLinkedin />
    </div>
</div>

<div className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <FaGithub />
    </div>
</div>

<div className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <CgNotes />
    </div>
</div>

    </div>
  );
}

export default Socials;
