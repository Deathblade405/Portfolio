import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <h2>Contact Me</h2>
      <div className="footer-container">
        <p>
          Email: <a href="mailto:ajithnarayana57@gmail.com" className="footer-email">ajithnarayana57@gmail.com</a>
        </p>
        <div className="social-links">
          <a href="https://github.com/Deathblade405" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/ajithnarayanak/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={30} />
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
