import React from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2>Contact us</h2>
        <center>
          <div className="line"></div>
        </center>

        <a href="mailto:ravisingh17200@gmail.com" style={{ textDecoration: "none", color: "black" }}> <div className="contact-icons">
          <MdOutlineEmail className="email-icon" /> : ravisingh17200@gmail.com
        </div></a>

        <a
          href="https://wa.me/917828618763"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <div className="contact-icons">
            <FaWhatsapp className="whatsapp-icon" /> : 7828618763
          </div>
        </a>
        <a
          href="tel:+917828618763"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div   className="contact-icons"><FaPhoneAlt className="mobile-icon" /> : +91-7828618763</div>
  
        </a>
      </div>
    </>
  );
};

export default Contact;
