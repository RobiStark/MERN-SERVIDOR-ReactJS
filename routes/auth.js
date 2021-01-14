//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
//const Usuario = require('../models/Usuario');

//Iniciar Sesion
//api/auth

router.post('/',
    authController.autenticarUsuario);

    //Obtener el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutentiado
)    

module.exports = router;