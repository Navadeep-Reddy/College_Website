import React from 'react'
import Navbar from './components/Navbar';
import '/src/Styles/index.css'
import Hero from './components/Hero';
import Academics from './components/Academics';
import About from './components/About'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Academics />
      <About />
  
    </div>
  )
}

export default App;
