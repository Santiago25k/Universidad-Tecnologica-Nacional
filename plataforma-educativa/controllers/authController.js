// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../config/db'); // archivo de conexión a la base de datos
require('dotenv').config();

// Registro de usuario
exports.register = (req, res) => {
    const { nombre, apellido, email, pass } = req.body;

    if (!nombre || !apellido || !email || !pass) {
        return res.status(400).json({ error: 'Por favor, completa todos los campos' });
    }

    // Verifica si el email ya existe
    const queryEmail = 'SELECT email FROM Usuarios WHERE email = ?';
    connection.query(queryEmail, [email], (err, results) => {
        if (err) {
            console.error('Error en el servidor al verificar email:', err);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
        if (results.length > 0) {
            return res.status(400).json({ error: 'El email ya está registrado' });
        }

        // Verifica si el usuario ya existe (por nombre y apellido)
        const queryUser = 'SELECT * FROM Usuarios WHERE nombre = ? AND apellido = ?';
        connection.query(queryUser, [nombre, apellido], (err, results) => {
            if (err) {
                console.error('Error en el servidor al verificar usuario:', err);
                return res.status(500).json({ error: 'Error en el servidor' });
            }
            if (results.length > 0) {
                return res.status(400).json({ error: 'El usuario ya está registrado' });
            }

            // Hashear la contraseña
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(pass, salt);

            // Insertar el usuario en la base de datos
            const insertQuery = 'INSERT INTO Usuarios (nombre, apellido, email, pass) VALUES (?, ?, ?, ?)';
            connection.query(insertQuery, [nombre, apellido, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('Error al registrar el usuario:', err);
                    return res.status(500).json({ error: 'Error al registrar el usuario' });
                }
                res.status(201).json({ message: 'Usuario registrado exitosamente' });
            });
        });
    });
};

// Inicio de sesión
exports.login = (req, res) => {
    const { email, pass } = req.body;

    if (!email || !pass) {
        return res.status(400).json({ error: 'Por favor, completa todos los campos' });
    }

    // Verificar si el usuario existe
    const query = 'SELECT * FROM Usuarios WHERE email = ?';
    connection.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error en el servidor al iniciar sesión:', err);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
        if (results.length === 0) {
            return res.status(400).json({ error: 'Email o contraseña incorrectos' });
        }

        const user = results[0];

        // Verificar la contraseña
        const isMatch = bcrypt.compareSync(pass, user.pass);
        if (!isMatch) {
            return res.status(400).json({ error: 'Email o contraseña incorrectos' });
        }

        // Generar el token
        const token = jwt.sign({ id: user.id_usuarios }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Inicio de sesión exitoso', token });
    });
};
