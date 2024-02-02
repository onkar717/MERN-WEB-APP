// Contact.js
import React from 'react';
import '../index.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder='Enter your Name' name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Enter Your Email' required />

        <label htmlFor="Number">Phone:</label>
        <input type="Number" id="Number" name="Number" placeholder='Number' required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder='Message' required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
