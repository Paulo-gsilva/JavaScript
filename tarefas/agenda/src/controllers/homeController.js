exports.paginaIncial = (req, res) => {
    res.render('index', {
        titulo: 'Testando view',
        numeros: [0, 1, 2, 3, 4]
    }); //renderiza o view
    return;
}

exports.profile = (req, res) => {
    res.send('Profile');
    return;
}
