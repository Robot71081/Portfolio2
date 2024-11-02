import React, { useState } from 'react'
import Statusbar from '../components/Statusbar'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Education = () => {
   
    const navigate=useNavigate()
  return (
    <div className='flex flex-row h-screen bg-cover bg-center  '>
    <div className="hidden md:flex flex-1 bg-black">1st</div>
    <div className="flex-1 ">
     <Statusbar/>
     <div className="flex items-center mb-6 mt-2">
    <IoMdArrowRoundBack 
        className='text-4xl cursor-pointer hover:text-black transition duration-300' 
        onClick={() => navigate('/')}
    />
    
    <span className='flex-grow  text-3xl font-semibold text-center'>Education</span>
</div>

<div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4  ">
<h3 className="text-xl font-bold mb-2 ">Masters in Computer Application (Online Mode)</h3>
<h4 className="text-lg font-semibold mb-1 text-gray-300">Lovely Professional University</h4>
<p className="mb-2 text-gray-300">Sept-2022 - Sept-2024</p>

      
      
    </div>

    <div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4  ">
      <h3 className="text-xl font-bold mb-2">B.Sc in Computer Science</h3>
      <h4 className="text-lg font-semibold mb-1 text-gray-300">Veer Narmad South Gujarat University</h4>
      <p className=" mb-2 text-gray-300">July-2019 - July-2022</p>
      
      
    </div>
    

    </div>
    <div className="hidden md:flex flex-1 bg-black">3rd</div>
  </div>
  
  )
}

export default Education
