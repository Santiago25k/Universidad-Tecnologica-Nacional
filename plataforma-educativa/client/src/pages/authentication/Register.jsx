import React, { useState, useEffect } from "react";
import "./styles/auth.css"; // Asegúrate de que esta ruta sea correcta
import "./styles/spacestars.css"; // Asegúrate de incluir este archivo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Asegúrate de instalar font-awesome si no lo tienes
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Importar íconos
import { Link } from "react-router-dom";
import { initSpaceStars } from "./scripts/spacestarsV2"; 


const Register = () => {
  // Estado para manejar la visibilidad de la contraseña
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  useEffect(() => {
    initSpaceStars();
  }, []);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación para verificar que las contraseñas coincidan
    /*if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
*/
    // Datos a enviar al backend
    const registerData = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      pass: formData.password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al registrar el usuario");
      }

      const data = await response.json();
      alert("Registro exitoso, por favor inicia sesión");
      window.location.href = "/login";
    } catch (error) {
      alert("Error al registrar el usuario: " + error.message);
    }
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
          <h2 className="form-title">Registrarse</h2>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ingresa tu apellido"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
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
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
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
            Registrarse
          </button>
          <p className="login-link">
            ¿Ya tienes cuenta? <Link to= "/login">Inicia sesión aquí</Link>
          </p>
          {/* <Link to="/register">
          <button>Registrate</button>
          </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
