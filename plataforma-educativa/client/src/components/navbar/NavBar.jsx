import React, { useState } from "react";
import "./styles/navbar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>cursosIT</h1>
        </div>
        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul
          className={`nav-links ${isMenuOpen ? "active" : ""}`}
          id="nav-links"
        >
          <li>
            <a href="./routes/testingqa.html">Testing</a>
          </li>
          <li>
            <a href="#top">Inicio</a>
          </li>
          <li>
            <a href="https://github.com/Santiago25k">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/santiago-ercoles-b40b29331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Linkedin
            </a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
