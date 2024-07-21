import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, blanditiis eum corporis facilis magni perferendis doloremque quaerat deserunt voluptatum perspiciatis quia incidunt dignissimos asperiores. Perferendis impedit modi quod minus officiis!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook icon" />
                <img src={assets.twitter_icon} alt="Twitter icon" />
                <img src={assets.linkedin_icon} alt="Linkedin icon" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+910000099999</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
