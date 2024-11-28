const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const coursRoutes = require('./routes/coursRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const suscribeRoutes= require('./routes/suscribeRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const commentsRoutes = require('./routes/commentsRoutes');

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
  }));
  
  // Ejemplo de un endpoint
  app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde el backend!' });
  });

//conexion a la base de datos
const db = require('./config/db');

//middleware para procesar JSON
app.use(express.json());

//rutas para usar con json
app.use('/api/cours', coursRoutes);
app.use('/api/users', userRoutes);

//rutas  para usar con database
// Rutas
app.use('/api/auth', authRoutes);  // Autenticación
app.use('/api/cursos', coursesRoutes);  // Cursos
app.use('/api/comments', commentsRoutes);

// Rutas mejoradas con recursos más claros
app.get('/usr/:id_usuario/cursos/:id_curso/certificado', certificateRoutes);  // Certificado de un curso de un usuario específico
app.get('/usr/:id_usuario/perfil', userProfileRoutes);  // Perfil de un usuario específico
app.post('/usr/:id_usuario/suscribir', suscribeRoutes);  // Suscribir a un usuario a un curso


//definir puerto e iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,()  => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})