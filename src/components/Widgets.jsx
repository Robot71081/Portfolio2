import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';


const Widgets = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div className='flex flex-row justify-center items-center space-x-6'>
    <div className='p-6 rounded-3xl shadow-lg bg-slate-200 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
     
      <Clock value={value} />
    </div>
    <div className="flex flex-col items-center justify-center bg-black rounded-3xl shadow-lg text-white w-[230px] h-40 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
  <span className="text-2xl font-bold">Rohit Pawar</span>
  <span className="text-lg">Web Developer</span>
</div>

  </div>
      
    
  )
}

export default Widgets
