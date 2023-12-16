import React from 'react'
import './Parallax.css'

const Parallax = () => {
  return (
    <div className='parallax'>
        <div className='parallax-inner'>
            <h2>Baked fresh daily by bakers with passion.</h2>
            <button className='-btn'>Learn More</button>

        </div>
        <div className='parallax2'>
            <h1>Hurry up! Subscribe our newsletterand get 25% Off</h1>
            <p>Limited time offer for this month. No credit card required.</p>
            <div style={{display:'flex',justifyContent:'center',}}>
            <input style={{width:'20rem',marginRight:'1rem'}} placeholder='Email Address here'/>
            <button className='-btn'>Learn More</button>
            </div>

        </div>



    </div>
  )
}

export default Parallax