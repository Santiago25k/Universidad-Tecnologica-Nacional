const express = require('express');
const app = express();
require('dotenv').config();
const Port = process.env.PORT || 8080;
const hbs = require('hbs');
const mysql = require('mysql2');
const path = require('path');
const nodemailer = require('nodemailer');
const { getLogger } = require('nodemailer/lib/shared');

// Configuración de Middelwares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));

//Conectamos la app a una Base de Datos
/*
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
    database: process.env.DATABASE,
});

conexion.connect((err)=>{
    if(err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId)
});
*/
//Configuramos la Vista de la Aplicación
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Home
app.get('/', (req, res) =>{
    res.render('index', {titulo: 'Bienvenido a Nuestra app'})
});

//Peliculas
app.get('/peliculas', (req, res) =>{
    let sql = "SELECT ID_PELICULA,  NOMBRE,  DATE_FORMAT( FECHA, '%d/%m/%Y') as FECHA ,  PAIS,  COMENTARIOS,TIPO FROM peliculas"
    let query = conexion.query(sql, (err, results)=>{
        if(err) throw err;
        console.log(results);
        res.render('peliculas', {
            titulo: 'Te muestro los Productos',
            results
        });
        
    });
});

// Enviar Mail
app.get('/contacto', (req, res) =>{
    res.render('contacto', {titulo: 'Escríbenos'})
});

app.post('/contacto', (req, res) => {
    console.log(req.body);
    const { nombre, email, descripcion } = req.body;
    if (nombre == "" || email == "" || descripcion == "") {
        let validacion = 'Faltan datos, todos los campos son obligatorios'
        res.render('contacto', {
            titulo: 'Formulario para completar',
            validacion
        })
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'ally34@ethereal.email',
            pass: 'bMjWzNjAv37m14v1bQ'
        }
    });

    var mailOptions = {
        from: nombre,
        to: email,
        subject: "Enviado desde NodeJS",
        text: descripcion
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            res.status(500).send(error.message);
        } else {
            console.log("Email enviado.");
            //res.status(200).jsonp(req.body);
            let validacion = 'Email enviado.'
            res.render('contacto', {
                titulo: 'Formulario para completar',
                validacion
            })
        }
    });
});



// Servidor 
app.listen(Port, ()=>{
    console.log(`Servidor corriendo en el Puerto ${Port}`);
});
app.on('error', (error) =>{
    console.log(`Tenemos un error ${error}`);
});













