import React from 'react'
import "./Contact.css"
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
  <>

          <div className="contact">
            <h2>Contact us</h2>
            <center>            <div className="line"></div></center>

            <div className="contact-icons"><MdOutlineEmail className="email-icon" /> : ravisingh17200@gmail.com</div>
          <a href="https://wa.me/917828618763"style={{ textDecoration: "none", color: "black" }}>     <div className="contact-icons"><FaWhatsapp className="whatsapp-icon" /> : 7828618763</div></a>
            <div className="contact-mobile-icons" style={{ textDecoration: "none"}}><FaPhoneAlt className="mobile-icon" /> : 7828618763</div>
          </div>
            
  </>
  )
}

export default Contact

