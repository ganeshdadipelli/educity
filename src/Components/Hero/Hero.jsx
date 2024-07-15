/* eslint-disable no-unused-vars */
import React from 'react';
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png' 

const Hero = () => {
  return (
    <div className='hero ' >
        <div className='hero-text'>
            <h1>We Ensure better Education for a better world</h1>
            <p> At EduSofty, we believe in the power of education to transform lives. thats why we have created a comprehensive online platform that revolutionizes the way students learn and educators teach. With our innovative tools and resources, we aim to make learning engaging, accessible, and effective for everyone, regardless of their background or location.</p>
       <button className='btn'>Explore more <img src={dark_arrow} alt='' /></button>
        </div>
        
    </div>
  );
}

export default Hero;
