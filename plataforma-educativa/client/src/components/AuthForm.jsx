import React, { useState } from "react";

const AuthForm = ({ title, inputs, buttonText, linkText, linkHref }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missingFields = inputs.filter(({ name }) => !formData[name]?.trim());
    if (missingFields.length > 0) {
      alert("Por favor completa todos los campos requeridos.");
      return;
    }

    const emailInput = inputs.find((input) => input.type === "email");
    if (emailInput) {
      const emailValue = formData[emailInput.name];
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        alert("Por favor ingresa un correo válido.");
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Ocurrió un error."}`);
        return;
      }

      const data = await response.json();
      console.log("Respuesta del backend:", data);
      alert("Autenticación exitosa.");
      // Aquí puedes redirigir al usuario
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error al enviar los datos. Por favor intenta más tarde.");
    }
  };

  return (
    <div className="form-container">
      <form className="auth-form" id="auth-form" onSubmit={handleSubmit}>
        <h2 className="form-title">{title}</h2>
        {inputs.map(({ label, type, name, placeholder }, index) => (
          <div className="input-group" key={index}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-button">
          {buttonText}
        </button>
        <p className="login-link">
          {linkText} <a href={linkHref}>aquí</a>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
