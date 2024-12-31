import React, { useState } from "react";
import "./styles/Services.css"; // Importamos los estilos desde el archivo CSS

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Terapia Individual",
      image: "/images/terapia_individual.jpg", // Ruta de la imagen
      content: [
        "La terapia individual es un espacio seguro y confidencial diseñado para ayudarte a explorar y comprender tus pensamientos, emociones y comportamientos. Nuestro enfoque está orientado a fortalecer tu bienestar emocional, fomentar tu crecimiento personal y proporcionarte herramientas para afrontar los retos de la vida con mayor confianza y resiliencia.",
        "En estas sesiones, trabajaremos juntos para identificar y superar barreras que puedan estar afectando tu calidad de vida, como el estrés, la ansiedad o el impacto de experiencias pasadas. También te ayudaremos a desarrollar una autoestima más sólida y a gestionar las emociones de manera saludable, promoviendo una mayor conexión contigo mismo.",
        "La terapia individual no solo trata de abordar problemas específicos, sino también de potenciar tus fortalezas y recursos internos. Nuestro objetivo es que encuentres claridad, equilibrio y un mayor sentido de propósito en tu día a día.",
      ],
    },
    {
      title: "Terapia de Pareja",
      image: "/images/terapia-pareja.jpg", // Ruta de la imagen
      content: [
        "La terapia de pareja está diseñada para fortalecer la comunicación, resolver conflictos y ayudar a las parejas a construir una relación más sana y enriquecedora. Juntos exploraremos las dinámicas de la relación y trabajaremos en estrategias para superar los desafíos que puedan estar enfrentando.",
        "Ya sea que estén atravesando una crisis o simplemente deseen mejorar su conexión, este espacio brinda herramientas prácticas y orientación profesional para fomentar la comprensión mutua y el respeto.",
      ],
    },
    {
      title: "Terapia Familiar",
      image: "/images/terapia_familiar.jpg", // Ruta de la imagen
      content: [
        "La terapia familiar se centra en mejorar la dinámica y las relaciones dentro del núcleo familiar. Ofrecemos un espacio donde cada miembro puede expresar sus inquietudes y participar en la construcción de un entorno más armonioso.",
        "Especialmente útil en procesos como el duelo migratorio o la adaptación a cambios significativos, esta terapia fomenta la comprensión mutua y el apoyo entre todos los integrantes de la familia.",
      ],
    },
  ];

  return (
    <div className="services-container" id="servicios">
      <h1 className="services-title">Servicios</h1>
      <div className="services-columns">
        {services.map((service, index) => (
          <div key={index} className="services-column">
            <img src={service.image} alt={service.title} className="service-image" />
            <button
              className={`accordion-button ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {service.title}
            </button>
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="accordion-content">
          {services[activeIndex].content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
