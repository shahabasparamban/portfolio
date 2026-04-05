import React from 'react';
import './Resume.css';

const Resume = () => {

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // from public folder
    link.download = 'MyCV.pdf';
    link.click();
  };

  return (
   <section id='resume'>
    <div className='cv'>
        <p className='text'>Here is my cv and you can Download it!!</p>
    <button className="download" onClick={handleDownload}>
          <span>Download CV</span>
        </button>
   
   </div>
   </section>
  )
}

export default Resume;
