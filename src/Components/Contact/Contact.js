import React, { useRef } from 'react';
import './Contact.css';
import youtube from '../../Assets/youtube.png';
import fbicon from '../../Assets/fbicon.png';
import linkedin from '../../Assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.name.value.trim();
    const message = form.current.name.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert('Please enter your name');
      return;
    }
    if (!message) {
      alert('Please enter your message');
      return;
    }

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }


    emailjs
      .sendForm('service_gob64fr', 'template_wucdp6c', form.current, {
        publicKey: 'BwR1v3TV3e8Nv30Ld',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className="contactPageTittle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='name' />
          <input type="text" className="email" placeholder='Your Email' name='email' />
          <textarea className="msg" name="message" rows={5} placeholder='message'></textarea>
          <button type="submit" value="Send" className="SubmitBtn">Submit</button>
          <div className="links">
            <img src={youtube} alt="Youtube" className="link" />
            <img src={fbicon} alt="Facebook" className="link" />
            <img src={linkedin} alt="Linkedin" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
