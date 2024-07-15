/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
<img src={about_img} alt="" className='about-img' />
<img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nuturing Tomorrows Leaders Today</h2>
<p>Founded on the principles of academic excellence and innovation, Educity stands as a beacon of higher learning, enriching the lives of students and advancing knowledge across diverse fields. Nestled within a vibrant campus community, the university cultivates an atmosphere of intellectual curiosity, fostering critical thinking, creativity, and collaboration among students, faculty, and staff.</p>
   <p>At Educity, students embark on a transformative educational journey guided by dedicated faculty who are renowned experts in their respective fields. Through rigorous academic programs, students are empowered to explore their passions, challenge assumptions, and develop the skills necessary to thrive in an ever-evolving global landscape.</p> 
    <p>Committed to diversity, equity, and inclusion, Educity embraces individuals from all walks of life, celebrating the unique perspectives and experiences that each person brings to the table. By fostering a culture of respect and understanding, the university strives to create an environment where all members feel valued, supported, and empowered to succeed.</p>
      </div>
    </div>
  );
}

export default About;
