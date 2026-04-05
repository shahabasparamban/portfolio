import React from 'react';
import './Skills.css';
import  img10 from '../../Assets/img10.png';
import img12 from '../../Assets/img12.png';
import img13 from '../../Assets/img13.png';

const Skills = () => {
  return (
    
      <section id ="skills">
        <span className="skillTittle">What I do</span>
        <span className="skillDesign">I am an entry-level developer who designs user-friendly interfaces and builds responsive websites and simple mobile app designs.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={img10} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I design intuitive and user-friendly digital experiences by combining clean UI design with thoughtful UX principles.</p>
                </div>
            </div>
             <div className="skillBar">
                <img src={img12} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>I design and develop responsive, modern websites with a focus on clean design and user experience.</p>
                </div>
            </div>
             <div className="skillBar">
                <img src={img13} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I design intuitive and user-friendly mobile applications with a focus on simplicity and usability.</p>
                </div>
            </div>
        </div>
      </section>
   
  )
}

export default Skills;
