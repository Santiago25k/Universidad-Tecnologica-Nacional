const express = require('express');
const dotenv = require('dotenv');
const app = express();
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

//conexion a la base de datos
const db = require('./config/db');


//middleware para procesar JSON
app.use(express.json());

//rutas
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

//rutas de autenticacion
app.use('/api/auth', authRoutes);


//cargar variables de entorno
dotenv.config();


//definir puerto e iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,()  => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})