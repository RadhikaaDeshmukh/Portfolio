import React from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
        </div>

      <div className="about-sections">
        <div className="about-left">
        <img src={profile} alt='profile img'/>
        </div>

        <div className="about-right">
           <div className="about-para">
                <p>I am an experianced developer with over 01 year of professional expertise in the field. Throught my career, I have had the privillage of collaborating with prestigious organizations,contributing to their successand growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experiance but also in the enthusiasm and dedication I bring to each project.</p>
           </div>
           <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Javscript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>NODE js</p><hr style={{width:"50%"}}/></div>
           </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIANCE</p>
        </div>
            <hr />
            <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
