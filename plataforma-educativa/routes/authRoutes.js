const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//ruta de registro
router.post('/register', authController.register);

//ruta inicio sesion
router.post('/login', authController.login);

module.exports = router;