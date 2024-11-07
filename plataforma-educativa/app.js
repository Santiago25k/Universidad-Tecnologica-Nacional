const express = require('express');
const dotenv = require('dotenv');

const app = express();
const coursRoutes = require('./routes/coursRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const suscribeRoutes= require('./routes/suscribeRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');


//conexion a la base de datos
const db = require('./config/db');

//middleware para procesar JSON
app.use(express.json());

//rutas para usar con json
app.use('/api/cours', coursRoutes);
app.use('/api/users', userRoutes);

//rutas  para usar con database
app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.get('/certificado/:id_usuario/:id_curso', coursesRoutes);
app.post('/suscribe', suscribeRoutes);
app.get('/perfil/:id_usuario', userProfileRoutes);


//definir puerto e iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,()  => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})