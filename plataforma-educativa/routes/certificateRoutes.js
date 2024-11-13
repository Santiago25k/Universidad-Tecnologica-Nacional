const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');


router.get('/usr/:id_usuario/cursos/:id_curso/certificado', certificateController.generateCertificate);


module.exports = router;