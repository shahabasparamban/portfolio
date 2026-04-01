import React from 'react';
import './Resume.css';
import { Link } from 'react-scroll';


const Resume = () => {
  return (
   <section id='resume'>
    <div className='cv'>
        <p className='text'>Here is my cv and you can Download it!!</p>
    <Link><button className="download">Download </button></Link>
   </div>
   </section>
  )
}

export default Resume
