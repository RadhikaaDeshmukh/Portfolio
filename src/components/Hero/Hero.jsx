import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {
  return (
    <div id='home' className='hero'>
      
      <img src={profile} alt='profile img'/>
      <h1><span>I'm Radhima pandit,</span> frontend developer based in INDIA</h1>
      <p>I am frontend developer from pune,India with 1 year of experience in multiple companies</p>
      <div className='hero-action'>
          <div className="hero-connect"><AnchorLink className= 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
