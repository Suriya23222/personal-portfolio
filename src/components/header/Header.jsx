import React, { useState } from 'react';
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Smithss</a>
        
        {/* Menu */}
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skill" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          {/* Close icon */}
          <i className="uil uil-times nav__close" aria-label="Close menu" onClick={toggleMenu}></i>
        </div>

        {/* Toggle icon */}
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps" aria-label="Open menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
