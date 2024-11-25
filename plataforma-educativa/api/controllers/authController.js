// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../config/db"); // archivo de conexión a la base de datos
require("dotenv").config();

//! Registro de usuario
exports.register = (req, res) => {
  const { nombre, apellido, email, pass } = req.body;
  const rol = "usuario"; //? Forzar rol de usuario

  if (!nombre || !apellido || !email || !pass) {
    return res
      .status(400)
      .json({ error: "Por favor, completa todos los campos" });
  }

  //? Verifica si el email ya existe
  const queryEmail = "SELECT email FROM Usuarios WHERE email = ?";
  connection.query(queryEmail, [email], (err, results) => {
    if (err) {
      console.error("Error en el servidor al verificar email:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }
    if (results.length > 0) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    //? Hashear la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(pass, salt);

    //? Insertar el usuario en la base de datos con rol 'usuario'
    const insertQuery =
      "INSERT INTO Usuarios (nombre, apellido, email, pass, rol) VALUES (?, ?, ?, ?, ?)";
    connection.query(
      insertQuery,
      [nombre, apellido, email, hashedPassword, rol],
      (err, result) => {
        if (err) {
          console.error("Error al registrar el usuario:", err);
          return res
            .status(500)
            .json({ error: "Error al registrar el usuario" });
        }
        res.status(201).json({ message: "Usuario registrado exitosamente" });
      }
    );
  });
};

//! Inicio de sesión
exports.login = (req, res) => {
  const { email, pass } = req.body;

  if (!email || !pass) {
    return res
      .status(400)
      .json({ error: "Por favor, completa todos los campos" });
  }

  //? Verificar si el usuario existe
  const query = "SELECT * FROM Usuarios WHERE email = ?";
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error en el servidor al iniciar sesión:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }
    if (results.length === 0) {
      return res.status(400).json({ error: "Email o contraseña incorrectos" });
    }

    const user = results[0];

    //? Verificar la contraseña
    const isMatch = bcrypt.compareSync(pass, user.pass);
    if (!isMatch) {
      return res.status(400).json({ error: "Email o contraseña incorrectos" });
    }

    //? Generar el token con el rol
    const token = jwt.sign(
      { id: user.id_usuario, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    //console.log("Token generado:", token);
    res.json({ message: "Inicio de sesión exitoso", token });
  });
};


//! Autenticación de usuarios
exports.authUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) {
      return res
        .status(401)
        .json({ error: "Acceso denegado: Token no proporcionado" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Token inválido" });
      }
      //console.log("Usuario autenticadoo:", req.user)
      req.user = decoded;
      next(); // Continúa al siguiente middleware o controlador
    });
  };
  
  //! Verificación del rol de administrador
  exports.authAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) {
      return res
        .status(401)
        .json({ error: "Acceso denegado: Token no proporcionado" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      if (decoded.rol !== "admin") {
        return res
          .status(403)
          .json({ error: "Acceso denegado: No tienes permisos de administrador" });
      }
  
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ error: "Token inválido" });
    }
  };
  
  
 //! Verificación de propiedad del comentario
exports.checkCommentOwnership = (req, res, next) => {
  const { id_comentario } = req.params;
  const userId = req.user.id; // Asegúrate de que req.user.id esté correctamente asignado por authUser

  const query = "SELECT id_usuario FROM Comentarios WHERE id_comentario = ?";
  connection.query(query, [id_comentario], (err, results) => {
    if (err) {
      console.error("Error al verificar el comentario", err);
      return res.status(500).json({ error: "Error al verificar el comentario" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    if (results[0].id_usuario !== userId) {
      return res.status(403).json({ error: "No tienes permiso para editar este comentario" });
    }

    // El usuario es dueño del comentario
    next();
  });
};