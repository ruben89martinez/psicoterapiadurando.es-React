import React from 'react';
import "./styles/Features.css";

const Features = () => {
  return (
    <section className="features-section bg-light p-5">
      <div className="container">
        {/* Primera Sección: Imagen a la izquierda, texto a la derecha */}
        <div className="row align-items-center">
          <div className="col-md-6 image-column">
            <img
              src="/images/despacho_sereno.jpg"
              alt="Paisaje sereno"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 text-column ">
            <h2 className="mb-4">Encuentra Paz y Comprensión</h2>
            <p className="lead primerbloque">
              "Tu bienestar emocional es nuestra prioridad. Aquí encontrarás un espacio seguro donde puedes ser tú mismo, sin juicios, sin prisas. 
              A través de la empatía y la comprensión, te ayudamos a conectar contigo mismo, superar desafíos y construir una vida más plena y equilibrada.
              Respira, estás en el lugar correcto."
            </p>
          </div>
        </div>
      </div>
      {/* Segunda Sección: Texto a la izquierda, imagen a la derecha */}
      <div className="full-width-section mt-5">
        <div className="text-column">
          <h2 className="mb-4" >El Poder de la Terapia</h2>
          <div className="segundobloque">
          <p>
            La psicoterapia puede ayudarte a comprender tus emociones, pensamientos y comportamientos, y te brindará herramientas efectivas para lidiar con ellos de manera saludable. También te ofrecerá un espacio seguro y confidencial donde puedas expresarte libremente y recibir apoyo y comprensión.
          </p>
          <p>
            Por naturaleza los seres humanos tendemos a restarle importancia a aquello que nos angustia por evitar contactar con el dolor. Frases como <em>“yo puedo solo”</em>, <em>“seré más fuerte si atravieso este problema sin ayuda”</em> o <em>“no estoy tan mal”</em> suelen formar parte de nuestro discurso mental cuando nos planteamos si deberíamos ir a terapia o no.
          </p>
          <p>
            Pues bien, buscar ayuda es un acto de <em>valentía, coraje y responsabilidad</em> sobre nosotros mismos y sobre nuestro bienestar emocional. Desarrollar herramientas que aún no conoces te servirán para vivir mejor y desarrollarte con más plenitud.
          </p>
          <p>
            Además, es importante recordar que no siempre es fácil identificar cuándo necesitamos ayuda. Muchas veces, nuestros problemas emocionales o psicológicos pueden ser sutiles y no evidentes a simple vista. Por eso, si sientes que algo no está bien en tu vida, si te sientes abrumado, ansioso, deprimido o si tienes dificultades para relacionarte con los demás, puede ser una buena idea considerar la posibilidad de buscar ayuda profesional.
          </p>
          <p>
            En resumen, buscar ayuda a través de la terapia es una decisión valiente y responsable que puede mejorar significativamente tu bienestar emocional y tu calidad de vida. No tengas miedo de pedir ayuda cuando la necesites; puede marcar una gran diferencia en tu vida.
          </p>
          </div>
        </div>
        <div className="corazon">
          <img
            src="/images/corazon.jpg"
            alt="Fondo con diseño de corazón"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
