//userProfileRoutes

const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');


router.get('/usr/:id_usuario/perfil', userProfileController.getUserProfile);


module.exports = router;