import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="logo" />
            <p>We bring the best of both Bengali cuisine and a variety of other dishes right to your doorstep. Our passion for authentic flavors and fresh ingredients ensures a delightful dining experience every time.</p>
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
            <li>paramitakitchen@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Paramita'sKitchen.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
