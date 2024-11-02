const express = require('express');
const router = express.Router();
const suscribeController = require('../controllers/suscribeController');

router.post('/suscribe', suscribeController.suscribeUsuarios);

module.exports = router;