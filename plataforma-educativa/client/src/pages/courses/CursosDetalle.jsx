import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CursoDetalle = () => {
  const { id } = useParams(); // Obtiene el ID del curso de la URL
  const [curso, setCurso] = useState(null); // Estado para almacenar el curso

  // Obtener el curso específico usando el ID
  useEffect(() => {
    fetch(`http://localhost:5000/api/cursos/${id}`) // Ruta para obtener un curso por ID
      .then((response) => response.json())
      .then((data) => setCurso(data)) // Guardamos el curso en el estado
      .catch((error) => console.error('Error al obtener el curso:', error)); // Manejo de errores
  }, [id]); // El useEffect se ejecuta cada vez que cambia el ID

  if (!curso) {
    return <div>Cargando...</div>; // Mientras se carga el curso
  }

  return (
    <div>
      <h1>{curso.titulo}</h1>
      <p>{curso.descripcion}</p>
      <p><strong>Duración:</strong> {curso.duracion}</p>
      {/* Puedes agregar más detalles del curso aquí */}
    </div>
  );
};

export default CursoDetalle;
