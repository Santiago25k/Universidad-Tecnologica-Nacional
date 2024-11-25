const express = require('express');
const router = express.Router();
const suscribeController = require('../controllers/suscribeController');


router.post('/usr/:id_usuario/suscribir', suscribeController.suscribeUsuarios);

module.exports = router;