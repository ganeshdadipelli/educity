/* eslint-disable no-unused-vars */
import React,{useEffect,useState } from 'react';
import './Navbar/Navbar.css'
import { Link } from 'react-scroll'; // Import Link from react-scroll
import menu_icon from '../assets/menu-icon.png'
import logo from "../assets/logo.png"


const Navbar = () => {
/*   this is a javsript function for adding dynamically , here we */
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',  ()=>{
      window.scrollY  > 50 ? setSticky(true) : setSticky(false) ;
    })
  },[]);
  const [mobileMenu,setMobileMenu] = useState(false);

const toggleMenu = ()=>{
mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

}
  return (
      <nav className={`container ${sticky? 'darknav': '' }`}>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
      <img src={logo} alt=""  className='logo'/>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programme </Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
        
        <li><Link to='testimonials' smooth={true} offset={-230} duration={500}>Testimonials</Link></li>
        <li><Link  to='contact' smooth={true} offset={-190} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menuicon' onClick={toggleMenu}/>
      </nav>
  );
}

export default Navbar;
