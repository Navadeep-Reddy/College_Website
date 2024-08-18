import React from 'react'
import '/src/Styles/Academics.css'
import Eng from '/Academics/Engineering.jpg'
import Man from '/Academics/Management.jpg'
import Adv from '/Academics/AdvCar.jpg'
import Inc from '/Academics/incubation.jpg'
import Res from '/Academics/Research.jpg'
import { BsGear } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { SiGoogletagmanager } from "react-icons/si";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";

const Academics = () => {
  return (
    <>
    
    <div className= 'container'>
      <div className='program'>
        <img src = {Eng}></img>
        <div className='caption '>
          <BsGear className='text-white' />
          <p className='text-white'>Engineering</p>
        </div>
      </div>

      <div className='program'>
        <img src = {Man}></img>
        <div className='caption'>
          <GrUserManager className='text-white' />
          <p className='text-white'>Management</p>
        </div>
      </div>

      <div className='program'>
        <img src = {Adv}></img>
        <div className='caption'>
          <SiGoogletagmanager className='text-white' />
          <p className='text-white'>Career Development</p>
        </div>
      </div>

    
      </div>
      <div className='container1'>
      <div className='program bott'>
        <img src = {Inc}></img>
        <div className='caption'>
          <SiFuturelearn className='text-white' />
          <p className='text-white'>Incubation</p>
        </div>
      </div>

      <div className='program bott'>
        <img src = {Res}></img>
        <div className='caption'>
          <MdOutlineScience className='text-white' />
          <p className='text-white'>Advanced Research</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Academics

