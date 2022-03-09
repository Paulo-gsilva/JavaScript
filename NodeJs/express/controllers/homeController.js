exports.paginaIncial = (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome:<input name="nome" type="text">
    <button>Enviar</button>
    </form>
    `);
}

exports.profile = (req, res) => {
    res.send('Profile');
}