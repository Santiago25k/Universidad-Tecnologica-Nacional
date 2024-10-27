const express = require('express');

const router = express.Router();

const courseController = require('../controllers/courseController');

//rutas para los cursos
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

module.exports = router;