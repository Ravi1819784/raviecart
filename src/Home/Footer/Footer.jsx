import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const Footer = () => {

  return (
    <>
      <div className="main-footer">

          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <li className="hm">Home</li>
            </Link>

        <div className="footer-social">
          <h2>Social-Contact</h2>
          <div className="footer-icons">
            <a href="https://github.com/Ravi1819784">
              <FaGithub className="footer-icon" />
            </a>

            <a href="https://www.linkedin.com/in/ravi-singh-09a6ba165"><FaLinkedinIn className="footer-icon" /></a>

        <a href="https://wa.me/917828618763"style={{ textDecoration: "none", color: "white" }}><FaWhatsapp className="footer-icon" /> </a>

            <FaInstagram className="footer-icon" />
          </div>
        </div>
        <div className="about-footer">

               <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
          <h2>About us</h2>
            </Link>
          <div className="footer-about-link">
            {" "}

          </div>
          
        </div>

        <div className="contact-footer">
          <Link to="/contact" style={{ textDecoration: "none", color: "white" }}> <h2>Contact us</h2></Link>
      
          <div className="contact-icon"><MdOutlineEmail className="email-icon" /> : ravisingh17200@gmail.com</div>
          <a href="https://wa.me/917828618763"style={{ textDecoration: "none", color: "white" }}>     <div className="contact-icon"><FaWhatsapp className="whatsapp-icon" /> : 7828618763</div></a>
     <a href="tel:+917828618763" className="contact-icon"style={{ textDecoration: "none", color: "white" }}><FaPhoneAlt className="mobile-icon" /> : 7828618763</a>
        </div>
            <div className="copyright">© 2025 raviecart. All rights reserved</div> 
      </div>

    </>
  );
};

export default Footer;
