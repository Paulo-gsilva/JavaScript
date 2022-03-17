const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const {loginRequired, deleteRequired} = require('./src/middlewares/middleware');

route.get('/', homeController.index);

//ROTAS LOGIN
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

//Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index); //nav.ejs
route.post('/contato/register', contatoController.register); //nav.ejs
route.get('/contato/index/:id', loginRequired, contatoController.editIndex); //contato.ejs
route.post('/contato/edit/:id', loginRequired, contatoController.edit); //contato.ejs
route.get('/contato/delete/:id', deleteRequired, contatoController.delete) //index.ejs

module.exports = route;