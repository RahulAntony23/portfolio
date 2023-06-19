import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ljb03sb', 'template_zsf3rz9', form.current, 'B4d7MArLDl4vEPxJg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <br /> 
      <div className="container contact_container">
        <div className="contact_content">
          <article className="contact_card">
          <MdEmail className="contact_icon" />
            <h4>
              <b>Email</b>
            </h4>
              <h5>rahulantony003@gmail.com</h5>
              <a href="mailto:rahulantony003@gmial.com" className="contact_link">Send Email</a>
          </article>

          <article className="contact_card">
          <BsLinkedin className="contact_icon" />
            <h4>
              <b>LinkedIn</b>
            </h4>              
              <h5>Rahul Antony</h5>
              <a href="https://www.linkedin.com/in/rahul-antony-7a83b320b/" target="_blank"  className="contact_link">Connect</a>
          </article>

          <article className="contact_card">
          <RiWhatsappFill className="contact_icon" />
            <h4>
              <b>WhatsApp</b>
            </h4>
              <a href="https://wa.me/918861083150" target="_blank" className="contact_link">Text Me</a>
          </article>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <h3>Send me a Message</h3>
            <input name='name' type="text" placeholder="Name" className="contact_input" />
            <input name='email' type="email" placeholder="Email" className="contact_input" />
            <input mame='subject' type="text" placeholder="Subject" className="contact_input" />
            <textarea name='message' id="message" cols="30" rows="10" placeholder="Message" className="contact_input"></textarea>
            <button type="submit" className="contact_button">Send Message</button>

          </form>
          </div>
    </section>
  )
}

export default Contact