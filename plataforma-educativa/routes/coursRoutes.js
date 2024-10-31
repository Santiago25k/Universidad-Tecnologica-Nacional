//courseController

const express = require('express');
const router = express.Router();
const coursController = require('../controllers/coursController');

//rutas para los cursos
router.get('/', coursController.getAllCours); //obtener todos los cursos
router.get('/:id', coursController.getCoursById); //obtener un curso por id
//router.put('/:id', coursController.updateCoursById); //actualizar curso por id

module.exports = router;