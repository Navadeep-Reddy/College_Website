import React from 'react'
import Navbar from './components/Navbar';
import '/src/Styles/index.css'
import Hero from './components/Hero';
import Academics from './components/Academics';

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Academics />
    </div>
  )
}

export default App;
