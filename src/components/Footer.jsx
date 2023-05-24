import React from "react";
import "../assets/css/newsCard.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="gadget-wrapper">
        <h4>Hi-<span className="span-gadget">Gadgets</span></h4>
        <p>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="icon-wrapper">
          <FaFacebookF  className="social"/>
          <FaLinkedinIn  className="social"/>
          <FaTwitter  className="social"/>
          <AiFillInstagram  className="social"/>
        </div>
      </div>

      <div className="links-wrapper">
        <h4>Quick Links</h4>
        <Link to='/' className="link">Home</Link>
        <Link to='#' className="link">About</Link>
        <Link to='#' className="link">Shop</Link>
        <Link to='#' className="link">Contact</Link>
      </div>

      <div className="contact-wrapper">
        <h4>Contact</h4>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
      </div>

      <div className="subscribe-wrapper">
        <h4>Subscribe To Our Email</h4>
        <h1>For Latest News & Updates</h1>
        <input type='text' placeholder= 'Enter Your Email' />
        <button type="submit">Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
