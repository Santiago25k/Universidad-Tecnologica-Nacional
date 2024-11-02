//coursesController

const connection = require("../config/db");

//! obtener todos los cursos
exports.getAllCourses = (req, res) => {
  const query = "SELECT * FROM cursos";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener cursos" });
    }
    res.json(results);
  });
};

//! obtener un curso por id
exports.getCoursesById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM Cursos WHERE id_curso = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener el curso" });
    }
    if (results.length === 0) {
      return res.status(400).json({ error: "Curso no encontrado" });
    }
    res.json(results[0]);
  });
};

//! actualizar un curso por id
exports.updateCoursesById = (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, duracion } = req.body;

  const query =
    "UPDATE Cursos SET titulo = ?, descripcion = ?, duracion = ? WHERE id_curso = ?";
  connection.query(
    query,
    [titulo, descripcion, duracion, id],
    (err, results) => {
      if (err) {
        console.error(err); // Imprime el error en la consola
        return res.status(500).json({ error: "Error al actualizar el curso" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }
      res.json({ message: "Curso actualizado con éxito" });
    }
  );
};

//! Agregar un nuevo curso
exports.createCourse = (req, res) => {
    const { titulo, descripcion, duracion } = req.body;
  
    const query = "INSERT INTO Cursos (titulo, descripcion, duracion) VALUES (?, ?, ?)";
    connection.query(query, [titulo, descripcion, duracion], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Error al agregar el curso" });
      }
      res.status(201).json({ message: "Curso agregado con éxito", id: results.insertId });
    });
  };