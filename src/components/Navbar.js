/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa' 
import './Navbar.css'
const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='header'>
      <div className="container">
        <h1>De<span className="primary">Fi.</span></h1>
        <ul className={click? 'nav-menu active':'nav-menu'}>
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a href="/">FEATURED</a>
            </li>
            <li>
                <a href="/">EARN</a>
            </li>
            <li>
                <a href="/">CONTACT</a>
            </li>
        </ul>
        <div>
            <button className='btn'>Connect Wallet</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} className="white-glassmorphism" />): (<FaBars size={20} style={{color: 'white'}} className='nav-icon' />)}
                    
                </div>
      </div>
    </div>
  )
}

export default Navbar
