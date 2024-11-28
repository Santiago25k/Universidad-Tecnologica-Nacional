import React, { useState, useEffect } from "react";
import "./styles/auth.css"; // Asegúrate de que esta ruta sea correcta
import "./styles/spacestars.css"; // Asegúrate de incluir este archivo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Asegúrate de instalar font-awesome si no lo tienes
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Importar íconos
import { Link } from "react-router-dom";
import { initSpaceStars } from "./scripts/spacestarsV2"; 

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    initSpaceStars();
  }, []);

  // Maneja el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: formData.email,
      pass: formData.password, // 'password' cambiado a 'pass' para coincidir con el backend
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token); // Almacena el token (si es necesario)
      alert("Inicio de sesión exitoso");
      navigate("/dashboard"); // Cambia "/dashboard" a la ruta deseada
    } catch (error) {
      console.error("Error:", error.message);
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  // Alternar visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      {/* Fondo estrellado */}
      <div className="container">
        <div className="space space-1"></div>
        <div className="space space-2"></div>
        <div className="space space-3"></div>
        <div className="meteor"></div>
      </div>

      <div className="form-container">
        <form className="auth-form" id="auth-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Iniciar Sesión</h2>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Ingresar
          </button>
          <p className="register-link">
            ¿No tienes cuenta? <Link to= "/register">Regístrate aquí</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
