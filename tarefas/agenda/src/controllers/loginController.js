const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async (req, res) =>{
    try{
        const login = new Login(req.body);
        await login.registrar();

        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(() => { //salva a sessão e retorna para página anterior
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Usuário criado com sucesso.');
        req.session.save(() => {
            return res.redirect('/login/index');
        })

    }catch(e){
        return res.render('404')
    }
}