const connection = require("../config/db");
const {
  authUser,
  checkCommentOwnership,
} = require("../controllers/authController");

const moment = require("moment");

//!Obtener todos los comentarios de un curso
exports.getCommentsByCourses = (req, res) => {
  const { id_curso } = req.params;
  const query =
    "SELECT c.id_comentario, c.comentario, c.fecha, u.nombre FROM Comentarios";
  connection.query(query, [id_curso], (err, results) => {
    if (err) {
      console.error("Error al obtener comentarios", err);
      return res.status(500).json({ error: "Error al obtener el comentario" });
    }
    res.status(200).json({ comentarios: results });
  });
};

//!Crear comentario
exports.addComment = (req, res) => {
  const { id_curso, id_usuario } = req.params;
  const { comentario } = req.body;

  if (comentario.length === 0) {
    return res
      .status(400)
      .json({ message: "El comentario no puede estar vacio" });
  }

  if (comentario.length > 250) {
    return res
      .status(400)
      .json({ message: "El comentario no puede tener mas de 100 caracteres" });
  }

  //? Validación: Comprobar si el usuario ha comentado en los últimos 30 minutos
  const checkLastCommentQuery =
    "SELECT fecha FROM Comentarios WHERE id_usuario = ? ORDER BY fecha DESC LIMIT 1";
  connection.query(checkLastCommentQuery, [id_usuario], (err, results) => {
    if (err) {
      console.error("Error al consultar el último comentario", err);
      return res
        .status(500)
        .json({ error: "Error al consultar el último comentario" });
    }

    if (results.length > 0) {
      const lastCommentTime = moment(results[0].fecha); // Hora del último comentario
      const currentTime = moment(); // Hora actual

      const diffInMinutes = currentTime.diff(lastCommentTime, "minutes"); // Diferencia en minutos

      if (diffInMinutes < 30) {
        return res
          .status(400)
          .json({
            message: "Solo puedes agregar un comentario cada 30 minutos.",
          });
      }
    }

    //? Si pasa las validaciones, creamos el comentario
    const query =
      "INSERT INTO Comentarios(id_curso, id_usuario, comentario) VALUES (?, ?, ?)";
    connection.query(
      query,
      [id_curso, id_usuario, comentario],
      (err, results) => {
        if (err) {
          console.error("Error al agregar el comentario", err);
          return res
            .status(500)
            .json({ error: "Error al agregar el comentario" });
        }
        res.status(201).json({
          message: "Comentario agregado con éxito",
          id_comentario: results.insertId,
        });
      }
    );
  });
};

//!Borrar un comentario por ID
exports.deleteCommentsById = (req, res) => {
  const { id_comentario } = req.params;

  // Asegurarnos de que solo el administrador pueda borrar comentarios
  const { rol } = req.user; // Se supone que el rol del usuario se obtiene del token

  if (rol !== "admin") {
    return res
      .status(403)
      .json({ error: "Acción no permitida: Se necesita rol de administrador" });
  }

  const query = "DELETE FROM Comentarios WHERE id_comentario = ?";
  connection.query(query, [id_comentario], (err, results) => {
    if (err) {
      console.error("Error al eliminar el comentario", err);
      return res.status(500).json({ error: "Error al eliminar comentario" });
    }

    if (results.affectedRows === 0) {
      return res.status(400).json({ message: "Comentario no encontrado" });
    }

    res.status(200).json({ message: "Comentario eliminado con éxito" });
  });
};

//!Editar un comentario
exports.updateComment = [
  authUser, // Verificar que el usuario esté autenticado
  checkCommentOwnership, // Verificar que el usuario sea el dueño del comentario
  (req, res) => {
    const { id_comentario } = req.params;
    const { comentario } = req.body;

    const query = "SELECT * FROM Comentarios WHERE id_comentario = ?";
    connection.query(query, [id_comentario], (err, results) => {
      if (err) {
        console.error("Error al obtener comentario", err);
        return res
          .status(500)
          .json({ error: "Error al obtener el comentario" });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: "Comentario no encontrado" });
      }

      const updateQuery =
        "UPDATE Comentarios SET comentario = ? WHERE id_comentario = ?";
      connection.query(
        updateQuery,
        [comentario, id_comentario],
        (err, result) => {
          if (err) {
            console.error("Error al actualizar comentario", err);
            return res
              .status(500)
              .json({ error: "Error al actualizar el comentario" });
          }
          res.status(200).json({ message: "Comentario actualizado con éxito" });
        }
      );
    });
  },
];
