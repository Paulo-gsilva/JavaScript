const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

route.get('/', homeController.paginaIncial);
route.get('/contato', contatoController.contact);

module.exports = route;