const connection = require("../config/db");

exports.suscribeUsuarios = (req, res) => {
  const { id_usuario, id_curso } = req.body;

  //? Primero, verifica si el usuario existe
  const checkUserQuery = "SELECT * FROM Usuarios WHERE id_usuario = ?";

  connection.query(checkUserQuery, [id_usuario], (err, userResults) => {
    if (err) {
      console.error("Error al verificar el usuario", err);
      return res.status(500).json({ message: "Error al verificar el usuario" });
    }

    if (userResults.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    //? Luego, verifica cuántas veces el usuario está inscrito en el curso
    const checkQuery = `
      SELECT COUNT(*) AS count
      FROM Inscripciones 
      WHERE id_usuario = ? AND id_curso = ?
    `;

    connection.query(checkQuery, [id_usuario, id_curso], (err, results) => {
      if (err) {
        console.error("Error al verificar inscripciones", err);
        return res.status(500).json({ message: "Error al verificar inscripciones" });
      }

      const count = results[0].count;

      //? Verifica si el usuario ya está suscrito al menos 1 ve<
      if (count >= 1) {
        return res.status(400).json({
          message: "El usuario ya está suscrito al curso",
        });
      }

      //? Si no está suscrito más de 2 veces, proceder a la inserción
      const query = "INSERT INTO Inscripciones (id_usuario, id_curso) VALUES (?, ?)";

      connection.query(query, [id_usuario, id_curso], (err, results) => {
        if (err) {
          console.error("Error al suscribir el usuario", err);
          return res.status(500).json({ message: "Error al suscribir el usuario" });
        }

        res.status(201).json({
          message: "Usuario suscrito correctamente",
          id_inscripcion: results.insertId,
        });
      });
    });
  });
};
