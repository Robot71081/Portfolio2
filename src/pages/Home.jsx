import React from 'react';
import Statusbar from '../components/Statusbar';
import Widgets from '../components/Widgets';
import Socials from '../components/Socials';
import Info from '../components/Info';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className='flex  h-screen bg-cover bg-center'>
      <div className="hidden md:flex flex-1 bg-black">1st</div>
      <div className="flex-1 overflow-auto ">
        <Statusbar />
        <Widgets />
        <Info />
        <Projects />
        <Socials />
      </div>
      <div className="hidden md:flex flex-1 bg-black">3rd</div>
    </div>
  );
};

export default Home;
