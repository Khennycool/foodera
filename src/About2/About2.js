import React from 'react'
import './About2.css'
import img from '../asset/About us 2.png'
import { ImCheckmark } from "react-icons/im";

const About2 = () => {
  return (
    <div id='About2'>
      <div> 
      <h1>We make everything by hand with the best possible ingredients.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <p><ImCheckmark color='var(--primary-color)' />Etiam sed dolor ac diam volutpat.</p>
      <p><ImCheckmark color='var(--primary-color)'/>Etiam sed dolor ac diam volutpat.</p>
      <p><ImCheckmark color='var(--primary-color)'/>Etiam sed dolor ac diam volutpat.</p>
      <button className='-btn'>Learn More</button>

      </div>


      <div className='about2-img'>
        <img src={img}/>

      </div>
      


    </div>
  )
}

export default About2