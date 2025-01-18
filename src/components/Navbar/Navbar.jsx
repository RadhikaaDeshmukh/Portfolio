import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/rplogo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu from '../../assets/menu.svg'
import cross from '../../assets/cross.svg'

const Navbar = () => {
    const [menus, setMenu] = useState('home')
    
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

  return (
    <div className='navbar'>
      <img src={logo} alt='Rp logo' width={80} />
      <img src={menu} onClick={openMenu} alt='menu icon' width={30} className='nav-mob-open'/>
     
      <ul ref={menuRef} className="nav-menu">
      <img src={cross} alt='cross icon' width={30} onClick={closeMenu} className='nav-mob-close'/>
        <li><AnchorLink className= 'anchor-link'  href='#home'><p onClick={() => setMenu("home")} >Home</p></AnchorLink></li>
        <li><AnchorLink className= 'anchor-link' offset={50} href='#about'><p onClick={() => setMenu("home")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className= 'anchor-link' offset={50} href='#services'><p onClick={() => setMenu("home")}>Services</p></AnchorLink></li>
        <li><AnchorLink className= 'anchor-link' offset={50} href='#work'><p onClick={() => setMenu("home")}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className= 'anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("home")}>Contact</p></AnchorLink></li>
      </ul>
      <div className='nav-connect'><AnchorLink className= 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
    