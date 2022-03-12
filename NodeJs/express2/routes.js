//USADO PARA CRIAR ROTAS
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

//ROTAS HOME
route.get('/', homeController.paginaIncial);
route.post('/', homeController.profile)
//ROTAS CONTATO
route.get('/contato', contatoController.contact);

module.exports = route;