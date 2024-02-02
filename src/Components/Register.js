import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="contact-container">
    <h2>Sing-Up !</h2>
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required placeholder='Enter Your Name' />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required placeholder='Enter Your Email' />


      <label htmlFor="Number">Phone:</label>
      <input type="Number" id="Number" name="Number" required placeholder='Enter Mobile Number'/>


      <label htmlFor="work">work:</label>
      <input type="work" id="work" name="work" required placeholder='Work from' />


      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required placeholder='Paasowrd ' />

      <label htmlFor="password">Confirm Password:</label>
      <input type="password" id="password" name="password" required placeholder='Confirm Password' />

      <button type="submit">Register</button>

      <Link to='/login'>
        <span className='loginaccount'>already register ?</span>
        </Link>
    </form>
  </div>
  )
}

export default Register