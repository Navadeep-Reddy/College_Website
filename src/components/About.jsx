import React from 'react'
import AboutImg from '/About.png'
import '/src/Styles/About.css'
import { FaCirclePlay } from "react-icons/fa6";
const About = () => {
  return (
    <div className='mt-20 w-2/3 mx-auto flex container'>
      <div className='about-left '>
        <img src = {AboutImg} className='border rounded-xl imag'></img>
        <div className='play-icon'><FaCirclePlay /></div>    
      </div>
      <div className='about-right flex flex-col justify-center'>
        <p className='font-semibold text-Accent'>ABOUT UNIVERSITY</p>
        <h1 className='font-bold text-4xl'>Where Knowledge Meets Innovation</h1>

        <div className='mt-5 text-gray-800'>
            <p>   SSN is a home to aesthetically-designed buildings with state of the-art computer and internet facilities, modern workshops, seminar halls, auditoriums and well-stocked libraries, sports and games fields in addition to an indoor stadium with gymnasium</p>
            <p className='my-2'>SSN College of Engineering has a faculty strength of 275 with a faculty student ratio of 1 faculty for every 15 students</p>
            <p>With so much to offer, it is only natural that students of SSN get a unique opportunity to carve a niche for themselves in their preferred field of study</p>
        </div>

      </div>
    </div>
  )
}

export default About
