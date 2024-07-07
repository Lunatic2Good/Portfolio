import React from 'react'
import Typical from 'react-typical'
import './Header.css'
import profileImg from '../../assets/profile.png'

const Header = () => {
  return (
    <div className='header-container'>
      {/* header content */}
      <div className='header-content'>
        <h1>Hy! Am</h1>
        <h2 className='fullname'>Himesh Tyagi</h2>
        <h2>
            I'm a {" "}
            <Typical
              steps={[
                "Full Stack Developer 🚀",
                1000,
                "Frontend Developer ✅",
                1000,
                "Backend Developer 🏆",
                1000,
                "React Developer 🔯",
                1000,
                "App Developer 📲",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit beatae delectus deserunt iste, enim sit dolorem nulla, impedit sed ex? Aperiam ullam sapiente asperiores ipsa laboriosam vitae autem sint!
        </p>

        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className='fa-brands fa-paypal'></i>
          <i className="fa-brands fa-google-pay"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
        </div>
      </div>

      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  )
}

export default Header
