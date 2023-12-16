import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <div className='footer1'>
        <ul>
            <li>Register</li>
            <li>Forum</li>
            <li>Affiliate</li>
            <li>FAG</li>

        </ul>
        </div>

        <div className='footer2'>
        <ul>
            <li><FaFacebookF size={25}/></li>
            <li><CiTwitter size={25}/></li>
            <li><TfiYoutube size={25} /></li>
            <li><FaLinkedinIn size={25}/></li>
            <li><RxInstagramLogo size={25} /></li>
            <li><FaGithub  size={25} /></li>
        </ul>
        </div>
        <div className='footer-p'>
            <p style={{color:'white', alignItems:'center',}}>© 2021. Khennycool. All rights reserved.</p>

        </div>

        </div>
    </div>
  )
}

export default Footer