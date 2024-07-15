/* eslint-disable no-unused-vars */
import React from 'react';
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
       <div id='program'>
        <img src={program_1} alt=''  />
        <div className="caption">
         <div className='ganesh'>
         <img src={program_icon_1} alt=''/>
          <p>GraduateDegree</p>
         </div>
        </div>
       </div>
       <div id='program'>
        <img src={program_2} alt='' />
        <div className="caption">
          <div className='ganesh'>
          <img src={program_icon_2} alt='' />
          <p>MasterDegree</p>
          </div>
        </div>
       </div>
       <div id='program'>
        <img src={program_3} alt=''  />
        <div className="caption">
          <div className='ganesh'><img src={program_icon_3} alt=''/>
          <p> PostGraduation </p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Programs;
