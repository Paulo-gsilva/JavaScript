const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended: true})); //objeto que retorna o body
app.use(routes);

app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Executando Na Porta 3000');
});


/*
//REQ PARAMS QUERY BODY
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); //objeto que retorna o body

//req -> o que o usuário está pedindo
//res -> a resposta do pedido
app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome:<input name="nome" type="text">
    <button>Enviar</button>
    </form>
    `);
});

// /:informa um novo parametro da rota
//? - esse parametro é opcional
app.get('/teste/:id?/:parametro?', (req, res) => {
    console.log(req.params); //parametros da rota da url
    console.log(req.query); //o que foi escrito na query(barra) /teste/?chave1=valor1&chave2=valor2
    res.send(req.query);
})

app.post('/', (req, res) => {
    console.log(req.body); //recebe o que foi postado
    res.send(`Respostas: ${req.body.nome}`);
})

//porta que irá enviar a reposta
app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Executando Na Porta 3000');
});


/*
//INTRODUÇÃO
//express ajuda nas rotas da aplicação
//CRUD ->   CREATE      READ        UPDATE      DELETE
//          POST        GET         PUT         DELETE
//http://meusite.com/ <- GET -> Entrega a página /
//http://meusite.com/sobre <- GET -> Entrega a página /sobre

const express = require('express');
const app = express();

//req -> o que o usuário está pedindo
//res -> a resposta do pedido
app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome:<input name="nome" type="text">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

//porta que irá enviar a reposta
app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Executando Na Porta 3000');
});

//INSTALAR NODEMON:
//npm install nodemon --save-dev
//ASSISTIR:
//npx nodemon server.js
//OU
//"start": "nodemon server.js"
//npm start*/