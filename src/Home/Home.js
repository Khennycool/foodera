import React from 'react'
import './Home.css'
import img from '../asset/background.jpg'
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div id='Home'>
        <div>
            <h1>Good food choices are good investments.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
             <div className='--flex'>
            <button className='-btn'>Order Now <span className='icon'><FaShoppingBasket className='icons'/></span></button>
            <button className='-btn btn-white'>Learn More <IoIosArrowForward /></button>
        </div>
    </div>
    <div className='backgound'>
       <img src={img}/>
    </div>
  </div>
  )
  
}

export default Home