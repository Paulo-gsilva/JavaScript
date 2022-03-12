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
    //req.session.usuario = {nome: 'paulo', logado: true}; //sessão fica salva
    //req.flash('info', 'salve'); //mensagens só aparecem uma vez
    //req.flash('error', 'ih rapaz');
    console.log(req.flash('error'));
    res.render('index');
    return;
}

exports.profile = (req, res) => {
    res.send('Profile');
    return;
}