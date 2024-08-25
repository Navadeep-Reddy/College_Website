import React from 'react';
import '/src/Styles/hero.css';
import { MdArrowCircleRight } from "react-icons/md";
const Hero = () => {
  return (
    <div className='heroic flex justify-center items-center' name = "Top">
      <div className='Words flex-col flex max-w-[50rem] text-center justify-center items-center'>
        <h1 className='text-[3.8rem] font-extrabold '>A Legacy of Learning, A Future of Promise</h1>
        <p className='max-w-[43.8rem] mx-auto'>SSN Institutions, established by  Shiv Nadar, Founder and Chairman Emeritus, HCL Technologies, stand out as a premier centre of higher learning with a mission of pursuing excellence in education and research.</p>
        <button className="border w-40 rounded-full h-11 bg-Comp text-black my-4 flex items-center justify-center space-x-2"><span>Explore more</span> <MdArrowCircleRight className='text-Accent'/></button>
      </div>
    </div>
  )
}

export default Hero

