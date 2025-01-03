import React from "react";
import "./styles/Hero.css";

const Hero = () => (
  <section id="inicio" className="hero">
    <div className="hero-content" >
      <div className="hero-text">
        <h1>Psicoterapia Durango</h1>
        <p>Un espacio diseñado para tu bienestar emocional.</p>
      </div>
      <div className="hero-button">
        <a href="#contact" className="btn">Reserva tu cita</a>
      </div>
    </div>
  </section>
);

export default Hero;
