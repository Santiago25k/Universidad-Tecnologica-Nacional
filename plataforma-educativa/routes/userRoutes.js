const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

//rutas para los cursos
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;