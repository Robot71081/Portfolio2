import React from 'react'
import Statusbar from '../components/Statusbar'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
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
    
    <span className='flex-grow  text-3xl font-semibold text-center'>Skills</span>
</div>
<div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4   ">
<h3 className="text-3xl font-bold mb-2 text-center ">Frontend</h3>
<div className="flex flex-col mt-8">
    <div className="flex flex-row space-x-4 mb-2">
        <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
            <IoLogoHtml5 />
            <span>HTML</span>
        </span>
        <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
            <FaCss3Alt />
            <span>CSS</span>
        </span>
        <span className='flex items-center justify-center space-x-2 w-34 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
            <SiTailwindcss />
            <span>Tailwind</span>
        </span>
    </div>

    <div className="flex flex-row space-x-4 mb-2">
    <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
            <IoLogoJavascript />
            <span>Js</span>
        </span>
    <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
        <RiReactjsLine />
        <span>React </span>
    </span>
    <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
        <TbBrandRedux />
        <span>Redux</span>
    </span>
    </div>
    
  
</div>




      
      
    </div>

    <div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4   ">
<h3 className="text-3xl font-bold mb-2 text-center ">Backend</h3>
<div className="flex flex-col mt-8">
    <div className="flex flex-row space-x-4 mb-2">
        <span className='flex items-center justify-center space-x-2 w-36 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
            <FaNodeJs  />
            <span>Node.Js</span>
            
        </span>
        <span className='flex items-center justify-center space-x-2 w-38 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
            <FaNodeJs />
            <span>Express.js</span>
        </span>
        <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
            <SiJsonwebtokens />
            <span>JWT</span>
        </span>
    </div>

    <div className="flex flex-row space-x-4 mb-2">
    <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
        <SiSocketdotio />
        <span>Socket.io </span>
    </span>
    <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
        <SiMongodb />
        <span>MongoDb</span>
    </span>
    <span className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3'>
      
        <span>Mongoose</span>
    </span>
    </div>
    
  
</div>




      
      
    </div>
    </div>
    <div className="hidden md:flex flex-1 bg-black">3rd</div>
  </div>
  )
}

export default Skills
