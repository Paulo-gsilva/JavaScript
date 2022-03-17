const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContato();
    res.render('index', {contatos}); //renderiza na pagina index a variavel contato
}
