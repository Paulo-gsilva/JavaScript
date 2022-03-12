exports.paginaIncial = (req, res) => {
    res.render('index');
    return;
}

exports.profile = (req, res) => {
    res.send('Profile');
    return;
}