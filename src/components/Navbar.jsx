import React, {useState, useEffect} from 'react'
import logo from '/logo.svg'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      (window.scrollY > 100)? setSticky(true) : setSticky(false); 
    })
  });

  return (
    <nav className={`w-full text-white flex justify-between fixed top-0 left-0 items-center z-10 ${sticky ? `bg-Dom` : `bg-transparent`} duration-700`}>
       <img src = {logo} className='px-4 h-[3.5rem] my-4 pl-20'/>
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
