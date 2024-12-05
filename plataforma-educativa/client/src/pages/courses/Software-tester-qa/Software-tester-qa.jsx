import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/testerqa.css";

import certificateImg from "../../../assets/img/certificate-approval-boilerplate.svg";

import Amazon from "../../../assets/img/logo-amazon.svg";
import Carrefour from "../../../assets/img/carrefour-1999-20-.svg";
import IBM from "../../../assets/img/ibm.svg";
import McDonald from "../../../assets/img/mcdonalds-5.svg";
import Microsoft from "../../../assets/img/microsoft-6.svg";
import Lenovo from "../../../assets/img/lenovo-2.svg";
import ICBC from "../../../assets/img/icbc-pure-square.svg";

const CursoTesterQA = () => {
  const navigate = useNavigate();

  // Función para manejar la redirección al registro
  const handleInscriptionClick = () => {
    navigate("/register");
  };

  const handleMoreInfoClick = () => {
    alert("Más información sobre el curso");
  };

  return (
    <div className="landing-container">
      <div className="button1">
        <a href="">
          <button id="slideButton1">Curso Online</button>
        </a>
      </div>
      <h2 className="desktop-only">
        Curso de <br />
        <span className="test">Tester QA Manual</span>
      </h2>

      <div className="button2">
        <button id="slideButton2">
          <div className="content-row">
            <div className="icon-left">
              <div className="clock">
                <div className="clock-face"></div>
                <div className="hour-hand"></div>
                <div className="minute-hand"></div>
              </div>
            </div>
            <span style={{ fontSize: "large" }}>Duración: 25 horas</span>
            <div className="icon-right" onClick={() => console.log("Info")}>
              <span>!</span>
            </div>
          </div>
          <div className="level-bar">
            <div className="bar green-light"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <span style={{ fontSize: "large" }}>Nivel: Principiante</span>
          </div>
        </button>
      </div>

      <p>
        Construye planes de prueba eficientes para el Desarrollo de Software y
        garantiza la calidad de los procesos a la hora de crear productos IT.
        Conoce las herramientas y técnicas más utilizadas.
      </p>

      <div className="button">
        <a href="#mas-informacion">
          <button id="slideButton">Ver Curso</button>
        </a>
      </div>

      {/* Certificado container */}
      <div className="certificate-container">
        <div className="headers-container">
          <h2>Certifica tus conocimientos</h2>
          <h3>
            Tu certificado de CursosIT está respaldado por las más de 9.000
            empresas que confían en nosotros para capacitar y reclutar a sus
            colaboradores, en todo LATAM.
          </h3>
        </div>
        <div className="imagen">
          <img src={certificateImg} alt="certificado" />;
        </div>
      </div>

      {/* Banner Container */}
      <div className="banner-text">
        <span className="banner-span-text">
          Somos el nexo para tu trabajo ideal
        </span>
      </div>

      <div className="banner">
        <div className="slider">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
          />
          <img src={Amazon} alt="Amazon" />

          <img src={Carrefour} alt="Carrefour" />
          <img src={IBM} alt="IBM" />
          <img src={ICBC} alt="ICBC" />
          <img src={McDonald} alt="McDonald's" />
          <img src={Microsoft} alt="Microsoft" />
          <img src={Lenovo} alt="Lenovo" />
        </div>
      </div>

      <div class="mas-informacion" id="mas-informacion"></div>
      <div className="banner-info">
        <span className="banner-span-info">En este curso aprenderás</span>
      </div>
      {/* content-container */}
      <div className="content-container">
        {/* Rectángulos decorativos */}
        <div className="decorative-rect"></div>
        <div className="decorative-rect"></div>
        <div className="decorative-rect"></div>
        <div className="decorative-rect"></div>
        <div className="rectangle left">
          <ul>
            <li>Fundamentos de la Calidad del Software.</li>
            <li>Tipos y técnicas de pruebas.</li>
            <li>Procesos de testing.</li>
            <li>Cómo planificar, ejecutar y reportar pruebas.</li>
          </ul>
        </div>
        <div className="rectangle right">
          <ul>
            <li>Evaluación de procesos y productos.</li>
            <li>Identificación y reporte de errores.</li>
            <li>Herramientas avanzadas QA.</li>
            <li>Automatización de pruebas.</li>
          </ul>
        </div>
      </div>

      <div className="button-container">
        <button className="btn-left" onClick={handleInscriptionClick}>Quiero inscribirme</button>
        <button className="btn-right">Descargar plan de estudio</button>
      </div>
    </div>
  );
};
export default CursoTesterQA;
