import React, { useRef } from "react";
import "./contact.css";
import linkedIn from "../../assets/link.png";
import gitHub from "../../assets/github.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser"



const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pv06r42', 'template_8nxrnia', form.current, 'YhRTbfxUdb_G6-YBE')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email Sent Successfully')
      }, (error) => {
          console.log(error.text);
      });
      form.current.value = ""
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please Fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" className="name" name="user_name"/>
          <input type="email" placeholder="Your Email" className="email" name="user_email"/>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
          <div className="links">
            <Link
              to="https://www.linkedin.com/in/rishabhkhare24/"
              target="_blank"
            >
              <img src={linkedIn} alt="linkedIn" className="link" />
            </Link>
            <Link to="https://github.com/kharerishabh" target="_blank">
              <img src={gitHub} alt="linkedIn" className="link" />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
