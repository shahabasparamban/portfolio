import React from 'react';
import './Portfolio.css';
import mywork1 from '../../Assets/mywork1.png';
import mywork2 from '../../Assets/mywork2.png';
import mywork3 from '../../Assets/mywork3.png';

const Portfolio = () => {
  return (
    <section id='works'>
        <h2 className="worksTittle">My Portfolio</h2>
        <span className="worksDesc">I take pride in attention to the smallest details and making sure that my work is perfect.</span>
        <div className="worksImgs">
            <img src={mywork1} alt="" className="worksImg" />
                    <img src={mywork2} alt="" className="worksImg" />
              <img src={mywork3} alt="" className="worksImg" />
               
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Portfolio;
