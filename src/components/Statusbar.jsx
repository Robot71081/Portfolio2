import React from 'react';
import { MdOutlineNetworkCell } from "react-icons/md";
import { IoBatteryFullOutline } from "react-icons/io5";
import { Md4gMobiledata } from "react-icons/md";


const Statusbar = () => {
 
  

  return (
   
        <div className='flex items-center justify-between w-full p-2'>
          <div>
            <MdOutlineNetworkCell className='text-xl' />
          </div>
          
          <div className='flex-grow text-center  '>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className='font-semibold  rounded-3xl bg-black text-black'>Rohit Pawar</span>
          </div>
          
          <div className='flex items-center space-x-1'>
            <Md4gMobiledata className='text-2xl' />
            <span className='font-semibold'>100%</span>
            <IoBatteryFullOutline className='text-3xl'/>
          </div>
        </div>
      );
   
}

export default Statusbar;
