import React from 'react'
import logo from '../asset/logo.png';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt='logo'/>
        <nav>
          <ul>
            <li>Home</li>
           <a href='#About'><li>About Us</li></a> 
            <li>Explore food</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li><button className='-btn'>07037361571</button></li>
          </ul>
        </nav>

    </div>
  )
}

export default Header