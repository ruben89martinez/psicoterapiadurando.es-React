import React, { useEffect, useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:murciaterapeuta@gmail.com?subject=Consulta%20de%20${formData.name}&body=${formData.message}`;
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
