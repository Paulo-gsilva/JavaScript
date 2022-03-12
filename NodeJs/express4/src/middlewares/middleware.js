exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variavel local'; //essa variavel sera compartilhada para todas as rotas
    next();
}

exports.checkCrsfError = (error, req, res, next) => {
    if(error && "EBADCSRFTOKEN" === error.code){
        return res.sand('BAD CSRF.');
    }
}

exports.csfrMiddleware = (req, res, next) => {
    res.locals.csfrToken = req.csfrToken();
    next();
}