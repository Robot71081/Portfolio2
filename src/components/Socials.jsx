import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-around p-4 rounded-t-lg shadow-lg'>
      <a href="https://x.com/Rohit71081" className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
        <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
          <FaXTwitter />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/rohit-pawar-28913b24a/" className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
        <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
          <FaLinkedin />
        </div>
      </a>

      <a href="https://github.com/Robot71081" className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
        <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
          <FaGithub />
        </div>
      </a>

      <a href="/Resume/Rohit-Resume.pdf" download className='flex flex-col items-center space-y-1 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
        <div className='flex items-center justify-center bg-black text-white text-3xl md:text-4xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
          <CgNotes />
        </div>
      </a>
    </div>
  );
};

export default Socials;
