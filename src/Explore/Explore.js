import React from 'react'
import './Explore.css'
import img1 from '../asset/001.jpg'
import img2 from '../asset/002.jpg'
import img3 from '../asset/003.jpg'

const Explore = () => {
  return (
    <div className='explore'>
     <div className='explore-text'>
        <h1>Explore Our Foods</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
     </div>


     <div className='image'>
        <div className='img'>
            <img src={img1}/>
            <h3>Rainbow Vegetable Sandwich</h3>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <span>$10.50 $11.70</span>
            <hr style={{color:'#0000005e'}}/>
            < button className='-btn'>Order Now</button>

        </div>
        <div className='img'>
            <img src={img2}/>
            <h3>Rainbow Vegetable Sandwich</h3>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <span>$10.50 $11.70</span>
            <hr style={{color:'#0000005e'}}/>
            < button className='-btn'>Order Now</button>

        </div>
        <div className='img'>
            <img src={img3}/>
            <h3>Rainbow Vegetable Sandwich</h3>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <span>$10.50 $11.70</span>
            <hr style={{color:'#0000005e'}}/>
            < button className='-btn'>Order Now</button>

        </div>


     </div>



    </div>
  )
}

export default Explore