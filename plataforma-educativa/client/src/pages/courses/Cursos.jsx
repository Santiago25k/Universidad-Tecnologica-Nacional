import React, { useEffect, useState } from 'react';

//import { Link, Outlet, useLocation } from 'react-router-dom';
import './cursos.css'; // Importa el archivo CSS
import { Outlet, useNavigate, useLocation  } from "react-router-dom";

/*
const Cursos = () => {
  const location = useLocation();

  // Datos mock de cursos
  const cursosMock = [
    {
      id: 1,
      nombre: 'Software Tester QA',
      descripcion: 'Aprende las bases del testing de software y control de calidad.',
      slug: 'software-tester-qa',
    },
    {
      id: 2,
      nombre: 'Desarrollo Web Full Stack',
      descripcion: 'Conviértete en un desarrollador web completo desde cero.',
      slug: 'desarrollo-web-fullstack',
    },
    {
      id: 3,
      nombre: 'Introducción a la Ciberseguridad',
      descripcion: 'Comprende los fundamentos de la seguridad informática.',
      slug: 'introduccion-ciberseguridad',
    },
  ];
  


  // Mostrar cursos solo si estamos en "/cursos" y no en una subruta
  const isRootPath = location.pathname === '/cursos';

  return (
    <div className="cursos-container">
      {isRootPath && (
        <>
          <h1 className="cursos-title">Cursos Disponibles</h1>
          <div className="cursos-list">
            {cursosMock.map((curso) => (
              <div key={curso.id} className="curso-card">
                <h2 className="curso-nombre">{curso.nombre}</h2>
                <p className="curso-descripcion">{curso.descripcion}</p>
                <Link to={curso.slug} className="curso-boton">
                  Ver Curso
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
      <Outlet /> 
    </div>
  );
};
*/

 // Definir las rutas estáticas de las páginas específicas
 const rutasCurso = {
    4: "software-tester-qa", // ID del curso: ruta de la página
    2: "curso-react",
    6: "curso-python",
    // Agrega más cursos aquí según sea necesario
  };
  const Cursos = () => {
    const navigate = useNavigate();
    const [cursos, setCursos] = useState([]); // Estado para almacenar los cursos
  
    useEffect(() => {
      fetch("http://localhost:5000/api/cursos") // Ruta para obtener los cursos desde tu backend
        .then((response) => response.json()) // Convertir la respuesta a JSON
        .then((data) => {
          console.log(data); // Verifica qué datos estás recibiendo
          setCursos(data); // Guardar los cursos en el estado
        })
        .catch((error) =>
          console.error("Error al obtener los cursos:", error)
        ); // Manejo de errores
    }, []); // Este useEffect solo se ejecuta una vez cuando el componente se monta
     // Verifica si estás en la ruta principal o en una ruta hija
  const isRutaPrincipal = location.pathname === "/cursos";
  
  return (
    <div className="cursos-container">
      {isRutaPrincipal && ( // Muestra el contenido principal solo en la ruta "/cursos"
        <>
          <h1 className="cursos-title">Cursos Disponibles</h1>
          <div className="cursos-list">
            {cursos.map((curso) => (
              <div key={curso.id_curso} className="curso-card">
                <h2 className="curso-nombre">{curso.titulo}</h2>
                <p className="curso-descripcion">{curso.descripcion}</p>
                <button
                  className="curso-boton"
                  onClick={() => navigate(`/cursos/${rutasCurso[curso.id_curso]}`)} // Navega a la página específica del curso
                >
                  Ver Curso
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />
    </div>
  );
};
  


export default Cursos;
