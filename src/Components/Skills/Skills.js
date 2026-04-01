import React from 'react';
import './Skills.css';
import  img10 from '../../Assets/img10.png';
import img12 from '../../Assets/img12.png';
import img13 from '../../Assets/img13.png';

const Skills = () => {
  return (
    
      <section id ="skills">
        <span className="skillTittle">What I do</span>
        <span className="skillDesign">I am a skilled and passionate web designer</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={img10} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo</p>
                </div>
            </div>
             <div className="skillBar">
                <img src={img12} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
             <div className="skillBar">
                <img src={img13} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is dempo</p>
                </div>
            </div>
        </div>
      </section>
   
  )
}

export default Skills;
