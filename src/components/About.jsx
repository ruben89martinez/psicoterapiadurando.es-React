import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-image-container">
        <img 
          src="/images/foto_perfil.jpeg" 
          alt="Carolina Durango - Psicóloga" 
          className="about-image" 
        />
      </div>

      <div className="about-text">
        <p>
          Soy <strong>Carolina Durango</strong>, me licencié en la Universidad de Almería en el 2014. 
          Mi pasión por esta profesión viene desde pequeña en un afán de conocer el mundo que me rodeaba. 
          Con el tiempo comprendí que la curiosidad nacía de entenderme y conocer la forma que tenía de 
          ocupar mi lugar en el mundo.
        </p>

        <p>
          A parte de mi formación académica, lo que más me nutre como psicóloga es y ha sido conocer mi historia, 
          a través de mi propio proceso terapéutico, dándole su significado, comprendiendo y reparando aquello 
          que ahora como adulta me es posible, lo que me lleva a estar cada vez más presente y poner consciencia 
          en aquello que hago.
        </p>

        <p>
          Por tanto, poder permitirme acompañar procesos vitales, es para mí seguir descubriéndome y cuestionándome 
          como ser humano. Para todo esto estoy en constante reciclaje, entendiendo el ser humano desde un punto 
          de vista holístico.
        </p>

        <h3>Mi formación</h3>
        <p>
          En cuanto a mi formación, me he Licenciado en Psicología con Máster en Psicología sanitaria. 
          Psicoterapeuta Gestalt por el IPETG de Alicante. También estoy formada en <strong>Duelo y procesos de pérdida</strong> 
          por la Universidad de Murcia. Actualmente me formo en <strong>Eneagrama de la personalidad</strong>.
        </p>

        <h3>Mi experiencia profesional</h3>
        <p>
          Llevo 6 años dedicándome al ámbito privado y he trabajado durante 7 años en proyectos de migración y sinhogarismo, 
          ideación de la conducta suicida, centro de baja exigencia y acompañamiento a familias con miembros con 
          trastorno mental grave y patología dual.
        </p>

        <h3>Tu confianza es importante</h3>
        <p>
          Siéntete cómoda-o de preguntarme cualquier inquietud en base a mi metodología, ya que entiendo que poner tu salud 
          mental en manos de alguien desconocido, en un principio no resulta fácil. 
          Estaré encantada de conocer y redescubrir tu historia.
        </p>
      </div>
    </section>
  );
};

export default About;
