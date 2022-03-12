module.exports = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variavel local'; //essa variavel sera compartilhada para todas as rotas
    next();
}