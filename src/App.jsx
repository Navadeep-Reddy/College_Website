import React from 'react'
import Navbar from './components/Navbar';
import '/src/Styles/index.css'
import Hero from './components/Hero';
import Academics from './components/Academics';
import About from './components/About'
import Title from './components/Title';
import Gallery from './components/Gallery';
import Testi from './components/Testi';
import Contact from './components/Contact';
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title Title={"OUR PROGRAM"} SubTitle={"What We Offer"}/>
      <Academics />
      <About />
      <Title Title={'GALLERY'} SubTitle={'Campus Photos'}/>
      <Gallery />
      <Title Title={"TESTIMONIALS"} SubTitle={"What Student Says"} />
      <Testi />
      <Title Title={"CONTACT US"} SubTitle={"Get in Touch"} />
      <Contact /> 
      <Footer />
    </div>
  )
}

export default App;
