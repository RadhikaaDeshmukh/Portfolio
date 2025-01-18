import React from 'react'
import './Footer.css'
import profile from '../../assets/profile.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className="footer-top-left">
                <img src='' alt='' />
                <p>I am Frontend Developer from INDIA, with 02 years of experiance </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={profile} alt='profile_icon' width={30}/>
                    <input type='email' placeholder='Enter Your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
       
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
            <p className="footer-bottom-left">@ 2023 Ridhima Pandit. All rights reserved .</p>
        </div>

    </div>
  )
}

export default Footer
