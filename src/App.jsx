import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ServicesN from './components/Services/ServicesN'
import MyWork from './components/Mywork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
       <ServicesN />
       <MyWork />
       <Contact />
       <Footer/>
    </div>
  )
}

export default App
