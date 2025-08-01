import React from "react";
import {FaLinkedin, FaGithub } from "react-icons/fa"; 
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <p>© {currentYear} Kashish Garg</p>
        </div>

        <div className="footer-socials" aria-label="Social media links">
          <a href="https://www.linkedin.com/in/kashish-garg-a0259b2b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Kashishgarg-15" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
