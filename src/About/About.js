import React from 'react'
import './About.css'
import pic from '../asset/about.png'

const About = () => {
  return (
    <div id='About'>
        <div>
            <img src={pic}/>

        </div>

        <div className='about-text'>
            <h3>We pride ourselves on making real food from the best ingredients.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <button className='-btn'> Learn More</button>
        </div>




    </div>
  )
}

export default About