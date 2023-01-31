import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./email.css"
import Navbar2 from '../../UserPOV/NavBar/navbar2';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6x6q5nr', 'template_30jljzw', form.current, 'c4CMLKe9T0lm1YhoZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Navbar2/>
      <form className='emailborder' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='input' type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        {/* <input type="submit" value="Send" /> */}
        <button type="submit button" class="btn btn-primary" value="Send">Send</button>
        
    </form>
    </div>
  );
};