import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

//* Ruta protegida
const ProtectedRoute = ({ children }) => {
  const currentUser = localStorage.getItem("authToken"); // Verifica si existe un token

  if (!currentUser) {
    return <Navigate to="/login" />; // Redirige al login si no está autenticado
  }
  return children; // Renderiza el contenido protegido
};

//* Creación de rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/", // Página principal
        element: <Home />,
      },
      {
        path: "/profile/:id", // Página de perfil del usuario
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login", // Página de inicio de sesión
    element: <Login />,
  },
  {
    path: "/register", // Página de registro
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
