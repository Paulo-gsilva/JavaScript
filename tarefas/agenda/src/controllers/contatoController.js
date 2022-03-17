const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    //if(!req.session.user) return res.render('404');
    res.render('contato', {
        contato: {}
    });
};

exports.register = async (req, res) => {
    try{
        const contato = new Contato(req.body);
        await contato.register();
    
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/index')); //sessões são salvas para garantir que as falhas sejam salvas
            return;
        }
    
        req.flash('success', 'Contato registrado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;

    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.editIndex = async (req, res) => {
    if(!req.params.id) return res.render('404');

    const contato = await Contato.buscaId(req.params.id);

    if(!contato) return res.render('404'); //caso nao exista usuarios

    res.render('contato', {contato}); //vai renderizar no arquivo contato a variavel contato
}

exports.edit = async (req, res) => {
    try{
        if(!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
    
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/index')); //sessões são salvas para garantir que as falhas sejam salvas
            return;
        }
    
        req.flash('success', 'Contato editado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    }catch(e){
        console.log(e);
        res.render('404')
    }
}

exports.delete = async (req, res) => {
    if(!req.params.id) return res.render('404');
    const contato = await Contato.delete(req.params.id);
    if(!contato) return res.render('404'); //caso nao exista usuarios

    req.flash('success', `${contato.nome} ${contato.sobrenome} deletado da sua lista de contatos.`);
    req.session.save(() => res.redirect`/`);
    return;
}