//USADO PARA CRIAR ROTAS
const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

//ROTAS HOME
route.get('/', homeController.paginaIncial);
route.post('/', homeController.profile)
//ROTAS CONTATO
route.get('/contato', contatoController.contact);

module.exports = route;