import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Mensaje de éxito/error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!formData.name || !formData.email || !formData.message) {
      setFeedbackMessage("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    // Parámetros para enviar a EmailJS
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_o2cdowi", // Reemplaza con tu Service ID
        "template_b3dacf9", // Reemplaza con tu Template ID
        templateParams,
        "SZSjAvPtNwzdkleEz" // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log("Correo enviado exitosamente:", response.status, response.text);
          setFeedbackMessage("¡Correo enviado correctamente! Gracias por contactarnos.");
          setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          setFeedbackMessage("Hubo un error al enviar el correo. Por favor, intenta de nuevo.");
        }
      );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//platform.docplanner.com/js/widget.js";
    script.id = "zl-widget-s";
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("zl-widget-s");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-column contact-form">
        <h2 className="form-title">Envíanos un correo</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
      </div>
      <div className="contact-column contact-calendar">
        <h2 className="calendar-title">Reserva tu cita con nosotros</h2>
        <a
          id="zl-url"
          className="zl-url"
          href="https://www.doctoralia.es/carolina-durango-piedrahita/psicologo/murcia"
          rel="nofollow"
          data-zlw-doctor="carolina-durango-piedrahita"
          data-zlw-type="big_with_calendar"
          data-zlw-opinion="false"
          data-zlw-hide-branding="true"
          data-zlw-saas-only="true"
        >
          Carolina Durango Piedrahita - Doctoralia.es
        </a>
      </div>
    </div>
  );
};

export default Contact;
