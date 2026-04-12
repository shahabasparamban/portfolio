import React from 'react';
import './Portfolio.css';
import mywork1 from '../../Assets/mywork1.png';
import mywork2 from '../../Assets/mywork2.png';

import port from '../../Assets/port.png';

const Portfolio = () => {
  return (
    <section id='works'>
        <h2 className="worksTittle">My Portfolio</h2>
        <span className="worksDesc">I take pride in attention to the smallest details and making sure that my work is perfect.</span>
        <div className="worksImgs">
             <a href="https://shahabasparamban.github.io/stopwatch/" target="_blank" rel="noopener noreferrer">
          <img src={mywork1} alt="Project 1" className="worksImg" />
        </a>

        <a href="https://shahabasparamban.github.io/Simple-Calculator/" target="_blank" rel="noopener noreferrer">
          <img src={mywork2} alt="Project 2" className="worksImg" />
        </a>

        <a href="https://shahabasparamban.github.io/signup-login-form/" target="_blank" rel="noopener noreferrer">
          <img src={port} alt="Project 3" className="worksImg" />
        </a>

        </div>
        
    </section>
  )
}

export default Portfolio;
