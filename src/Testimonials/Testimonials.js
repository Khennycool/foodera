import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide }from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

// import img2 from '../asset/1.jpg'
// import img3 from '../asset/1.jpg'


const Data =[
  {
    id:1,
    img:'http://demo.tutsflow.com/foodera/images/testimonials/1.jpg',
  quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.',
  name:"Chiboy-Web Designer"},
  { id:2,
    img:'http://demo.tutsflow.com/foodera/images/testimonials/2.jpg',
  quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.',
  name:"Chiboy-Web Designer"},
  { id:3,
    img:'http://demo.tutsflow.com/foodera/images/testimonials/1.jpg',
  quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.',
  name:"Chiboy-Web Designer"}
]
const Testimonials = () => {
  
  return (
   
    <div className='testimonials'>
<h1>Testimonials</h1>

<Swiper
navigation={
 { nextE1:'.swiper-pagination'}
}

    pagination={{clickableP:true}}

  slidesPerView={1}
    spaceBetween={50}

    >
      
     
   
  {
    Data.map(({id,img,quote,name}) =>{
      return(
        <div className='testimonial container'>
       <SwiperSlide  >
<div  className='testimonials-section'>
          <div className='image-section'>
         <div className='testimonial-img'>
          <img src={img} alt='img'/>
          </div>
          </div>
          <div className='text'>
          <q>{quote}</q>
         
          </div>
          <div className='text'>
          <p>{name}</p>
          </div>
          
        </div>
         </SwiperSlide>
         </div>
      )
    })
  }
        


      
       
        
    </Swiper>
    
    
  
    </div>
   
  )
}


export default Testimonials