import React from 'react';
import './Intro.css';
import pic from '../../Assets/pic.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm <span className="introName">Shahabas</span><br/> React Developer</span>
                <p className="introPara">I am skilled developer with experience in creating <br/> visually appealing and user friendly websites.</p>

<Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={pic} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro
