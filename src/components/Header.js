import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Ajith Narayana K</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
