exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors'); //essa variavel sera compartilhada para todas as rotas
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.checkCrsfError = (error, req, res, next) => {
    if(error){
        return res.render('404');
    }
    next();
}

exports.csfrMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) =>{ //veriicar se está logado
    if(!req.session.user){
        req.flash('errors', 'Você precisa estar logado para cadastrar contatos');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next();
}