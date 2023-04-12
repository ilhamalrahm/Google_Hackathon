import React from 'react'
import '../styles/navbar.css'
import Smallbutton from './button'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const buttonname="Log In"
  return (
    <nav className="navheading">
      <h2>
            med<span>Overflow</span>
      </h2>
        <ul className="heading">
            <li className='about'>Discover More</li>
            <li>|</li>
            <li>Contact Us</li>
        </ul>
      
      <div>
        <Link to="/login">
        <Smallbutton type={buttonname} />
        </Link>
        

      </div>
        
    </nav>
  )
}

export default Navbar
