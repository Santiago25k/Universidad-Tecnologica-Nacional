const express = require('express');
const dotenv = require('dotenv');
const app = express();

//cargar variables de entorno
dotenv.config();

//middleware para procesar JSON
app.use(express.json());

//definir puerto e iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,()  => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})