//coursesController

const connection = require("../config/db");

//!Obbtener todos los cursos
exports.getAllCourses = (req, res) => {
  const query = "SELECT * FROM cursos";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener cursos" });
    }
    res.json(results);
  });
};

//!Obtener un curso por ID
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

//!Actualizar un curso por id
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

//!Agregar un nuevo curso
exports.createCourses = (req, res) => {
  const { titulo, descripcion, duracion } = req.body;

  const query =
    "INSERT INTO Cursos (titulo, descripcion, duracion) VALUES (?, ?, ?)";
  connection.query(query, [titulo, descripcion, duracion], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al agregar el curso" });
    }
    res
      .status(201)
      .json({ message: "Curso agregado con éxito", id: results.insertId });
  });
};

//!Borrar un curso por ID
exports.deleteCoursesById = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM Cursos WHERE id_curso = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar el curso" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }
    res.status(200).json({ message: "Curso eliminado con éxito" });
  });
};
