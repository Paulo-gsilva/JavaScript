exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors'); //essa variavel sera compartilhada para todas as rotas
    res.locals.success = req.flash('success');
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
