const express = require('express');
const dotenv = require('dotenv');
const app = express();
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

//conexion a la base de datos
const db = require('./config/db');

// Rutas
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

//cargar variables de entorno
dotenv.config();

//middleware para procesar JSON
app.use(express.json());

//definir puerto e iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,()  => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})