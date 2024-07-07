import React from 'react'
import logo from '../../assets/logo.jpg'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-logo'>
            <img src={logo} alt="logo" />
        </div>
        
        {/* copyright */}
        <div className="footer-copyright">
            <p>© 2024 Dollar Sign One Time. All Right reserved</p>
        </div>

        {/* socials */}
        <ul className='footer-social-media'>
         <li>
            <a href="/">
               <i className='fa-brands fa-x-twitter'></i>
            </a>
         </li>
         <li>
            <a href="/">
               <i className='fa-brands fa-instagram'></i>
            </a>
         </li>
         <li>
            <a href="/">
               <i className='fa-brands fa-linkedin'></i>
            </a>
         </li>
         <li>
            <a href="/">
               <i className='fa-brands fa-github'></i>
            </a>
         </li>
        </ul>
    </footer>
  )
}

export default Footer
