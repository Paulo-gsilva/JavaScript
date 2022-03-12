/*
ISSO SERÁ FEITO DE OUTRA FORMA
const HomeModel = require('../models/HomeModel'); //chamando o model do banco de dados
HomeModel.create({ //retorna uma promise com dados contidos em um documento
    id: 234567,
    nome: 'paulinho tuntun'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
*/
exports.paginaIncial = (req, res) => {
    res.render('index');
    return;
}

exports.profile = (req, res) => {
    res.send('Profile');
    return;
}