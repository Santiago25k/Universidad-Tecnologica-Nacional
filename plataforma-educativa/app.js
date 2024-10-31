const express = require('express');
const dotenv = require('dotenv');
const app = express();
const coursRoutes = require('./routes/coursRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

//conexion a la base de datos
const db = require('./config/db');


//middleware para procesar JSON
app.use(express.json());

//rutas para usar con json
app.use('/api/cours', coursRoutes);
app.use('/api/users', userRoutes);

//ruta de autenticacion para usar con database
app.use('/api/auth', authRoutes);


//cargar variables de entorno
dotenv.config();


//definir puerto e iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,()  => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})