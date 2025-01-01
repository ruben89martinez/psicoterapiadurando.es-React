import React, { useEffect } from "react";

const Doctoralia2 = () => {
  useEffect(() => {
    const scriptId = "zl-widget-s";
    // Verificar si el script ya está cargado
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//platform.docplanner.com/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.es/carolina-durango-piedrahita/psicologo/murcia"
        rel="nofollow"
        data-zlw-doctor="carolina-durango-piedrahita"
        data-zlw-type="big"
        data-zlw-opinion="true"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
      >
        Carolina Durango Piedrahita - Doctoralia.es
      </a>
    </div>
  );
};

export default Doctoralia2;
