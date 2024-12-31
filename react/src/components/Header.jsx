import React from 'react';
import "./styles/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src="/images/logo-zen-blanco.jpg" alt="Logo Zen" className="logo-image" />
      </div>
      <nav className="header-menu">
        <ul className="menu-list">
          <li className="menu-item"><a href="#inicio">Inicio</a></li>
          <li className="menu-item"><a href="#sobre-mi">Sobre mí</a></li>
          <li className="menu-item"><a href="#servicios">Servicios</a></li>
          <li className="menu-item"><a href="#blog">Blog</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.png" alt="instagram" className="icon-image" />
        </a>
        <a href="https://www.doctoralia.es/carolina-durango-piedrahita/psicologo/murcia" target="_blank" rel="noopener noreferrer">
          <img src="/images/doctoralia.png" alt="Doctoralia" className="icon-image" />
        </a>
        <button className="header-button btn">Reservar</button>
      </div>
    </header>
  );
};

export default Header;
