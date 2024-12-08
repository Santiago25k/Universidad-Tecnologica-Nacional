import React, { useEffect } from 'react';
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
import imagenCourse1 from "../../../assets/img/course-syllabus-vector.svg";
import baseLearning from "../../../assets/img/base-learning-guarantee-vector.svg"
import { acordeon } from "./scripts/acordeon";

const CursoTesterQA = () => {
  const navigate = useNavigate();

  // Función para manejar la redirección al registro
  const handleInscriptionClick = () => {
    navigate("/register");
  };

  const handleMoreInfoClick = () => {
    alert("Más información sobre el curso");
  };

  useEffect(() => {
    acordeon(); // Ejecutar la función acordeon después de que el componente se monte
  }, []); // El arreglo vacío asegura que solo se ejecute una vez

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

      <div className="mas-informacion" id="mas-informacion"></div>
      <div className="banner-info">
        <span className="banner-span-info">En este curso aprenderás</span>
      </div>
      {/* content-container */}
      <div className="content-container">
        {/* Rectángulos decorativos */}
        <div className="decorative-rect"></div>
        {/* <div className="decorative-rect"></div> */}
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
        <button className="btn-left" onClick={handleInscriptionClick}>
          Quiero inscribirme
        </button>
        <button className="btn-right">Descargar plan de estudio</button>
      </div>

      {/* requisitos-container */}
      <div className="requisitos-container">
        <div className="requisitos-headers-container">
          <h2>Requisitos previos</h2>

          <h3>
            <b>Conocimientos:</b> No se necesita experiencia previa ni
            conocimientos técnicos.
          </h3>
        </div>
      </div>

      {/* container-study-plan */}
      <div className="container-study-plan">
        <div className="study-plan">
          <h2>Plan de Estudio</h2>
          <div className="accordion-item">
            <button className="accordion-header">
              Conceptos de calidad <span className="plus">+</span>
            </button>
            <div className="accordion-content">
              <ul>
                <li>Atributos de calidad.</li>
                <li>Normas y estándares.</li>
                <li>Conceptos de testing.</li>
                <li>Fundamentos del testing.</li>
                <li>Tipos y técnicas de pruebas.</li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">
              Conceptos de casos de prueba <span className="plus">+</span>
            </button>
            <div className="accordion-content">
              <ul>
                <li>Atributos de un caso de prueba.</li>
                <li>Matriz de trazabilidad y tips.</li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">
              Conceptos de defectos <span className="plus">+</span>
            </button>
            <div className="accordion-content">
              <ul>
                <li>Atributos del defecto.</li>
                <li>Causa y raiz del bug.</li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">
              Conceptos de automatización <span className="plus">+</span>
            </button>
            <div className="accordion-content">
              <ul>
                <li>Creación de un script automatizado y ejecución.</li>
                <li>Scripting bajo Selenium IDE.</li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">
              Test de Perfomance <span className="plus">+</span>
            </button>
            <div className="accordion-content">
              <ul>
                <li>Test de carga.</li>
                <li>Test de stress.</li>
                <li>Plan de pruebas no funcionales.</li>
                <li>Pruebas bajo JMeter.</li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">
              Conceptos de proyectos <span className="plus">+</span>
            </button>
            <div className="accordion-content">
              <ul>
                <li>Riesgos, ambiente.</li>
                <li>Estrategias y estimaciones.</li>
                <li>Plan de pruebas.</li>
                <li>KPI e informes.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="imagen-course">
          <img src={imagenCourse1} alt="imagenCourse1" />
        </div>
      </div>

      <div className="certificate-container">
        <div className="imagen-learning">
          <img
            src={baseLearning}
            alt="base-learning"
          />
        </div>
        <div className="headers-container">
          <h2>Garantia de aprendizaje</h2>
          <h3>
            ¡Repasa y refuerza cuando lo
            necesites!
          </h3>
          <ul>
            <li>Toma nuevamente el curso de manera gratuita.</li>
            <li>Recupera las clases que no pudiste asistir.</li>
            <li>Refuerza tu conocimiento con nuevos recursos disponibles.</li>
          </ul>
        </div>
      </div>

      <div className="certificate-container">
        <div className="headers-container">
          <h2>Plataforma Propia</h2>
          <h3>
            Accede a las clases en vivo y al material adicional de estudio a
            través de nuestra plataforma virtual.
          </h3>
          <ul>
            <li>Suma ITCréditos y canjéalos por cursos.</li>
            <li>Realiza los exámenes desde tu casa y certifícate..</li>
            <li>Mantente conectado con la comunidad.</li>
          </ul>
        </div>
        <div className="imagen">
          <img
            src={baseLearning}
            alt="base-learning"
          />
        </div>
      </div>
    </div>
  );
};
export default CursoTesterQA;
