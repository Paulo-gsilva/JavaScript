require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTMONGO)
    .then(() => {
        console.log('emitindo');
        app.emit('pronto'); //emitindo sinal para verificar a conexão com o banco de dados
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true})); //objeto que retorna o body

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middleware);
app.use(routes);
//garantir que a base de dados conecte-se antes do cliente possa acessar o site
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Executando Na Porta 3000');
    });
})

