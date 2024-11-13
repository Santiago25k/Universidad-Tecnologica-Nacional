//commentsRoutes
const express = require('express');
const router = express.Router();
const { getCommentsByCourses, addComment, deleteCommentsById, updateComment } = require('../controllers/commentsController');
const { authUser, authAdmin, checkCommentOwnership } = require('../controllers/authController');

//!rutas de comentarios

//?Ruta para obtener todos los comentarios de un curso
// GET: /api/comments/cursos/:id_curso
router.get('/cursos/:id_curso', getCommentsByCourses);

//?Ruta para agregar un comentario en un curso
// POST /api/comments/cursos/:id_curso/usr/:id_usuario
router.post('/cursos/:id_curso/usr/:id_usuario', authUser, addComment);

//?Ruta para eliminar un comentario por id
// DELETE /api/comments/:id_comentario
router.delete('/:id_comentario', authAdmin, deleteCommentsById);

//?Ruta para actualizar un comentario por id
// PUT /api/comments/:id_comentario
router.put('/:id_comentario', authUser,checkCommentOwnership, updateComment);

module.exports = router;