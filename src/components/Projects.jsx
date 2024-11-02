import React from 'react'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { SiGooglegemini } from "react-icons/si";
import { PiWhatsappLogoBold  } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";


const Projects = () => {
  return (
    <>
    <div className='flex flex-row justify-center mt-6 space-x-6'>
    <div className='flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-5xl md:text-6xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <IoLogoGooglePlaystore />
    </div>
    <span className="text-sm mt-2 font-semibold text-center">Project Store</span>
</div>

<div className='flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-5xl md:text-6xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <GrNotes />
    </div>
    <span className="text-sm mt-2 font-semibold text-center">iNote</span>
</div>

<div className='flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-5xl md:text-6xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
       <SiGooglegemini />
    </div>
    <span className="text-sm mt-2 font-semibold text-center">Jem</span>
</div>

<div className='flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
    <div className='flex items-center justify-center bg-black text-white text-5xl md:text-6xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
       <PiWhatsappLogoBold />
    </div>
    <span className="text-sm mt-2 font-semibold text-center">Sandesh</span>
</div>


    
</div>
<div className='flex items-center justify-center mt-6'>
    <FaHome/><GoDotFill/><GoDotFill/><GoDotFill/>
</div>
</>

  )
}

export default Projects
