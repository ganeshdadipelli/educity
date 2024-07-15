/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  
  const slider = useRef();
  let tx=0;
  const slideForward = ()=>{
 if(tx > -50){
  tx -= 25;

 }
 slider.current.style.transform =`translateX(${tx}%)`;
  }

  const slideBackward  = ()=>{
    if(tx < 0){
      tx += 25;
    
     }
     slider.current.style.transform =`translateX(${tx}%)`;
  }
  
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='nextbtn' onClick={slideForward} />
        <img src={back_icon} alt='' className='backbtn' onClick={slideBackward} />
        <div className='slider'>
<ul ref={slider}>
  <li>
    <div className='slide'>
<div className="user-info">
  <img src={user_1} alt='' />
  <div>
    <h3>
      William jackson
    </h3>
    <span>Educity,USA</span>
  </div>
</div>
<p>
Studying at Educity University has been an incredible journey. The professors are not only knowledgeable but also incredibly supportive, always pushing us to reach our full potential. The hands-on learning approach and state-of-the-art facilities have truly enriched my educational experience. I have gained not just knowledge, but also valuable skills that I know will benefit me in my future career. I couldnot have asked for a better university to pursue my education.
</p>
    </div>
  </li>
  <li>
    <div className='slide'>
<div className="user-info">
  <img src={user_2} alt='' />
  <div>
    <h3>
      Mitchel Stark
    </h3>
    <span>Educity,Canada</span>
  </div>
</div>
<p>
Studying at Educity University has been an incredible journey. The professors are not only knowledgeable but also incredibly supportive, always pushing us to reach our full potential. The hands-on learning approach and state-of-the-art facilities have truly enriched my educational experience. I have gained not just knowledge, but also valuable skills that I know will benefit me in my future career. I couldnot have asked for a better university to pursue my education.
</p>
    </div>
  </li>
  <li>
    <div className='slide'>
<div className="user-info">
  <img src={user_3} alt='' />
  <div>
    <h3>
     David Warner
    </h3>
    <span>Educity, Aus</span>
  </div>
</div>
<p>
Studying at Educity University has been an incredible journey. The professors are not only knowledgeable but also incredibly supportive, always pushing us to reach our full potential. The hands-on learning approach and state-of-the-art facilities have truly enriched my educational experience. I have gained not just knowledge, but also valuable skills that I know will benefit me in my future career. I couldnot have asked for a better university to pursue my education.
</p>
    </div>
  </li>
  <li>
    <div className='slide'>
<div className="user-info">
  <img src={user_4} alt='' />
  <div>
    <h3>
      Virat Kohli
    </h3>
  
    <span>Educity,IND</span>
  </div>
</div>
<p >
Studying at Educity University has been an incredible journey. The professors are not only knowledgeable but also incredibly supportive, always pushing us to reach our full potential. The hands-on learning approach and state-of-the-art facilities have truly enriched my educational experience. I have gained not just knowledge, but also valuable skills that I know will benefit me in my future career. I couldnot have asked for a better university to pursue my education.
</p>
    </div>
  </li>
</ul>
        </div>
      </div>
      
  );
}

export default Testimonials;
