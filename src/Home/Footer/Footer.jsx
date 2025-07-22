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

        <div className="footer-social">
          <h2>Social-Contact</h2>
          <div className="footer-icons">
            <a href="https://github.com/Ravi1819784">
              <FaGithub className="footer-icon" />
            </a>
            <FaLinkedinIn className="footer-icon" />
            <FaWhatsapp className="footer-icon" />
            <FaInstagram className="footer-icon" />
          </div>
        </div>

        <div className="about-footer">
          <h2>About us</h2>
          <div className="footer-about-link">
            {" "}
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>About</li>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <li>Home</li>
            </Link>
          </div>
        </div>

        <div className="contact-footer">
          <h2>Contact us</h2>
          <div className="email"><MdOutlineEmail className="email-icon" /> : ravisingh17200@gmail.com</div>
          <div className="whatsapp"><FaWhatsapp className="whatsapp-icon" /> : 7828618763</div>
          <div className="mobile"><FaPhoneAlt className="mobile-icon" /> : 7828618763</div>
        </div>
            <div className="copyright">© 2025 raviecart. All rights reserved</div> 
      </div>

    </>
  );
};

export default Footer;
