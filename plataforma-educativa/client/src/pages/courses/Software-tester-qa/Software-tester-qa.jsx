import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/testerqa.css";


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
    </div>
  );
};

export default CursoTesterQA;
