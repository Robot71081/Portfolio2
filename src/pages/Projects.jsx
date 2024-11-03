import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Statusbar from '../components/Statusbar'
import ProjectList from '../components/ProjectCard'

const Projects = () => {
  const navigate=useNavigate()
  return (
    <div className='flex flex-row h-screen bg-cover bg-center  '>
    <div className="hidden md:flex flex-1 bg-black">1st</div>
    <div className="flex-1 overflow-auto ">
     <Statusbar/>
     <div className="flex items-center mb-6 mt-2">
    <IoMdArrowRoundBack 
        className='text-4xl cursor-pointer hover:text-black transition duration-300' 
        onClick={() => navigate('/')}
    />
    
    <span className='flex-grow  text-3xl font-semibold text-center'>Projects</span>
</div>

<ProjectList/>
    

    </div>
    <div className="hidden md:flex flex-1 bg-black">3rd</div>
  </div>
  
  )
}

export default Projects
