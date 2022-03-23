import React from "react";
import { FaInstagram } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  

  return (
    <footer className="footer">
      <p>Seguinos en Instagram</p>
      <div className="footerSocial">
        <a href="https://www.instagram.com/bistreashop/" target="blank">
        <FaInstagram className="icon" /> </a>        
      </div>
    </footer>
  );
};

export default Footer;