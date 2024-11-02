import React from 'react';
import { MdCastForEducation } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AppIcons = () => {
  return (
    <div className='flex flex-row justify-center mt-6 space-x-6 '> {/* Adjust space-x-6 for horizontal spacing */}
   <Link 
    to="/education" 
    className='flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'
>
    <div className='flex items-center justify-center bg-black text-white text-5xl md:text-6xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <MdCastForEducation />
    </div>
    <span className="text-sm mt-2 font-semibold text-center">Education</span>
</Link>


<Link 
    to='/skills' 
    className='flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'
>
    <div className='flex items-center justify-center bg-black text-white text-5xl md:text-6xl rounded-3xl shadow-lg w-20 md:w-24 h-20 md:h-24 hover:shadow-2xl transition-shadow duration-300'>
        <FaTools />
    </div>
    <span className="text-sm mt-2 font-semibold text-center">Skills</span>
</Link>

</div>

  );
}

export default AppIcons;
