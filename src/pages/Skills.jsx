import React from 'react';
import Statusbar from '../components/Statusbar';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJsonwebtokens, SiSocketdotio, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row h-screen bg-cover bg-center'>
            <div className="hidden md:flex flex-1 bg-black"></div>
            <div className="flex-1 overflow-auto p-4">
                <Statusbar />
                <div className="flex items-center mb-6 mt-2">
                    <IoMdArrowRoundBack
                        className='text-4xl cursor-pointer hover:text-black transition duration-300'
                        onClick={() => navigate('/')}
                    />
                    <span className='flex-grow text-3xl font-semibold text-center'>Skills</span>
                </div>

                {/* Frontend Section */}
                <div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4">
                    <h3 className="text-3xl font-bold mb-2 text-center">Frontend</h3>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-wrap justify-center">
                            {[
                                { icon: <IoLogoHtml5 />, label: 'HTML' },
                                { icon: <FaCss3Alt />, label: 'CSS' },
                                { icon: <SiTailwindcss />, label: 'Tailwind' },
                                { icon: <IoLogoJavascript />, label: 'JS' },
                                { icon: <RiReactjsLine />, label: 'React' },
                                { icon: <TbBrandRedux />, label: 'Redux' },
                            ].map(skill => (
                                <span key={skill.label} className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3 m-2'>
                                    {skill.icon}
                                    <span>{skill.label}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Backend Section */}
                <div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4">
                    <h3 className="text-3xl font-bold mb-2 text-center">Backend</h3>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-wrap justify-center">
                            {[
                                { icon: <FaNodeJs />, label: 'Node.Js' },
                                { icon: <span></span>, label: 'Express.js' },
                                { icon: <SiJsonwebtokens />, label: 'JWT' },
                                { icon: <SiSocketdotio />, label: 'Socket.io' },
                                { icon: <span></span>, label: 'Mongoose' },
                            ].map(skill => (
                                <span key={skill.label} className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3 m-2'>
                                    {skill.icon}
                                    <span>{skill.label}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Database Section */}
                <div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4">
                    <h3 className="text-3xl font-bold mb-2 text-center">Database</h3>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-wrap justify-center">
                            {[
                                { icon: <SiMongodb />, label: 'MongoDB' },
                                { icon: <SiMysql />, label: 'MySQL' },
                            ].map(skill => (
                                <span key={skill.label} className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3 m-2'>
                                    {skill.icon}
                                    <span>{skill.label}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="bg-black text-white rounded-3xl shadow-md p-6 mb-4">
                    <h3 className="text-3xl font-bold mb-2 text-center">Tools</h3>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-wrap justify-center">
                            {[
                                { icon: <FaGithub />, label: 'GitHub' },
                                { icon: <SiPostman />, label: 'Postman' },
                            ].map(skill => (
                                <span key={skill.label} className='flex items-center justify-center space-x-2 w-32 font-semibold bg-white text-black text-2xl rounded-3xl p-3 m-2'>
                                    {skill.icon}
                                    <span>{skill.label}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-1 bg-black"></div>
        </div>
    );
};

export default Skills;
