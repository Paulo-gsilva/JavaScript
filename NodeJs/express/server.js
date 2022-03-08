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

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
});

//porta que irá enviar a reposta
app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Executando Na Porta 3000');
});