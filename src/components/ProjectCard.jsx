import React from 'react';
import { sample } from '../sample';
import CarUsel from './CarUsel'
import { FaGithub } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  return (
    <div className={`border rounded-lg p-4 m-4 shadow-md transition-transform hover:scale-105 bg-black text-white`}>
      <h2 className="text-xl font-bold text-center">{project.title}  </h2>
    
      <p className="text-gray-300 text-center">{project.preview}</p>
      <div><CarUsel project={project}/></div>
      <p className='text-center text-xl font-semibold'>Frontend</p>
      <p className='text-center'>{project.frontend}</p>
      <p className='text-center text-xl mt-4 font-semibold'>Backend</p>
      <p className='text-center'>{project.backend}</p>
      <a
                    href={project.github}
                    target="_blank"
                    className='text-center bg-white text-black rounded-3xl font-semibold text-xl ml-8 w-40'
                    rel="noopener noreferrer"
                   
                    disabled={!project.github}
                  >
                    <FaGithub/>
                    GitHub
                  </a>
     
    
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {sample.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
