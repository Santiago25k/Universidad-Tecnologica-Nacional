import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Plataforma de Cursos</h1>
      </header>
      <main>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
    </div>
  );
};

export default Layout;
