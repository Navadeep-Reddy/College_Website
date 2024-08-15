import React from 'react'
import logo from '/public/logo.svg'

const Navbar = () => {
  return (
    <nav className='w-full text-white flex justify-between fixed top-0 left-0 items-center z-10'>
       <img src = {logo} className='px-4 w-100 h-100 pt-4 pl-20'/>
       <ul className='flex px-4 items-center text-Comp pr-20'>
            <li className='px-8 text-xl'>Home</li>
            <li className='px-8 text-xl'>Program</li>
            <li className='px-8 text-xl'>About Us</li>
            <li className='px-8 text-xl'>Testimonials</li>
            <li className="px-8 text-xl flex items-center">
                <button className="border w-40 rounded-full h-11 bg-Comp text-black">Contact Us</button>
            </li>

       </ul>
    </nav>
  )
}

export default Navbar
