const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');

router.get('/certificado/:id_usuario/:id_curso', certificateController.generateCertificate);

module.exports = router;