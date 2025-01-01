import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      {/* Logo */}
      <div className="header-logo">
        <img src="/images/logo-zen-blanco.jpg" alt="Logo Zen" className="logo-image" />
      </div>



      {/* Menú de navegación */}
      <nav className={`header-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <ul>
          <li className="menu-item"><Link to="/">Inicio</Link></li>
          <li className="menu-item"><Link to="/sobre-mi">Sobre mí</Link></li>
          <li className="menu-item"><Link to="/#servicios">Servicios</Link></li>
          <li className="menu-item"><Link to="/#contact">Contacto</Link></li>
        </ul>
      </nav>

      {/* Íconos de redes */}
      <div className="header-icons">
        <a href="https://www.instagram.com/interiormivoz/" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" className="icon-image" />
        </a>
        <a href="https://www.doctoralia.es/carolina-durango-piedrahita/psicologo/murcia" target="_blank" rel="noopener noreferrer">
          <img src="/images/doctoralia.png" alt="Doctoralia" className="icon-image" />
        </a>
      </div>
    </header>
  );
};

export default Header;
