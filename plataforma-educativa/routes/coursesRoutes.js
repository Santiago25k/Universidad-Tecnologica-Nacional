// coursesRouter
const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');
const { authAdmin } = require('../controllers/authController');


//! Rutas
router.get('/', coursesController.getAllCourses); //? Obtener todos los cursos
router.get('/:id', coursesController.getCoursesById); //? Obtener curso por id

router.post('/', authAdmin, coursesController.createCourse); //? Solo admin puede agregar nuevo curso
router.put('/:id', authAdmin, coursesController.updateCoursesById); //? Solo admin puede actualizar curso por id


module.exports = router;
