import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CursoTesterQA from "./pages/courses/Software-tester-qa/Software-tester-qa";
import PrivateRoute from "./components/PrivateRoute";
import Cursos from "./pages/courses/cursos";
import CursoDetalle from "./pages/courses/CursosDetalle";

//* Creación de rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ), // Página principal protegida
    children: [
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
  {
    path: "software-tester-qa", // Página de registro
    element: <CursoTesterQA/>,
  },
  
  {
    path: "/cursos", // Página de lista de cursos
    element: <Cursos />,
    children: [
      
      {
        path: "software-tester-qa", // Página específica para Tester QA Manual
        element: <CursoTesterQA />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
