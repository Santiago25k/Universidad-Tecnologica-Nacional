// userProfileController.js
const connection = require("../config/db");

exports.getUserProfile = (req, res) => {
  const { id_usuario } = req.params;

  // Consulta para obtener el perfil del usuario y los cursos en los que está inscrito, incluyendo el progreso
  const query = `
    SELECT u.nombre, u.email, c.id_curso, c.titulo, p.temas_completados, p.porcentaje
    FROM Usuarios u
    LEFT JOIN Inscripciones i ON u.id_usuario = i.id_usuario
    LEFT JOIN Cursos c ON i.id_curso = c.id_curso
    LEFT JOIN Progresos p ON i.id_usuario = p.id_usuario AND i.id_curso = p.id_curso
    WHERE u.id_usuario = ?
  `;

  connection.query(query, [id_usuario], (err, results) => {
    if (err) {
      console.error("Error al obtener el perfil", err);
      return res.status(500).json({ message: "Error al obtener el perfil" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Si el usuario tiene cursos, pero no hay progreso, puedes devolver un mensaje indicando esto
    if (results[0].id_curso === null) {
      return res.status(200).json({
        mensaje: "Este usuario no tiene cursos asignados o no ha comenzado su progreso.",
      });
    }

    res.status(200).json({ perfil: results });
  });
};
