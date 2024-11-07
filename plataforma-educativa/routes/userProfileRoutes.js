//userProfileRoutes

const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

router.get('/perfil/:id_usuario', userProfileController.getUserProfile);

module.exports = router;