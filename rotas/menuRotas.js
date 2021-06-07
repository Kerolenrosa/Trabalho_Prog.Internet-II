const express = require('express');
const rotas = express.Router();
const menuController = require('../controller/menuController')
const usuarioController = require('../controller/usuarioController')

//Menu
rotas.get('/listarMenu', menuController.listarMenu)
rotas.post('/inserirMenu', usuarioController.validarTokenUsuario, menuController.inserirMenu)
rotas.delete('/deletarMenu/:id', usuarioController.validarTokenUsuario, menuController.deletarMenu)

module.exports = rotas