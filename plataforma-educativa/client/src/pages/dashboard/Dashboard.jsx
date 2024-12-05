import React, { useEffect, useState } from "react";
import "./styles/dashboard.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  if (!userData) {
    return <p>Cargando información del usuario...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido al Dashboard</h1>
      <p>
        <strong>ID:</strong> {userData.id}
      </p>
      <p>
        <strong>Nombre:</strong> {userData.nombre}
      </p>
      <p>
        <strong>Apellido:</strong> {userData.apellido}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
};

export default Dashboard;
