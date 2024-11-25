const express = require('express');
const router = express.Router();
const authUserController = require('../controllers/authController');
const { authAdmin } = require("../controllers/authController");

//ruta de registro
router.post('/register', authUserController.register);

//ruta inicio sesion
router.post('/login', authUserController.login);



module.exports = router;