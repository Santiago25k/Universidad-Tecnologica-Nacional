// coursesRouter
const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');
const { authAdmin } = require('../controllers/authController');


//! Rutas de Cursos
// /api/cursos
router.get('/', coursesController.getAllCourses);  // Obtener todos los cursos
router.post('/', authAdmin, coursesController.createCourses);  // Crear un nuevo curso

// /api/cursos/:id_curso
router.get('/:id', coursesController.getCoursesById);  // Obtener un curso por ID
router.put('/:id', authAdmin, coursesController.updateCoursesById);  // Actualizar un curso por ID
router.delete('/:id', authAdmin, coursesController.deleteCoursesById);  // Eliminar un curso por ID


module.exports = router;
