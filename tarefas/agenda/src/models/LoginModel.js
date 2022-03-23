const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true}, //required força que exista o valor
    password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async logar(){
        this.validar();
        if(this.errors.length > 0){
            return;
        }

        this.user = await LoginModel.findOne({email: this.body.email});

        if(!this.user){
            this.errors.push('Usuário não existe');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)){ //senha escrita e senha do banco de dados
            this.errors.push('Senha Inválida');
            this.user = null;
            return;
        }
    
    }

    async registrar(){
        this.validar();
        if(this.errors.length > 0){
            return;
        }

        await this.userExists();

        if(this.errors.length > 0){
            return;
        }
        
        const salt = bcryptjs.genSaltSync(); //convertendo senha para hash
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
    }

    async userExists(){
        this.user = await LoginModel.findOne({email: this.body.email});
        if(this.user){
            this.errors.push('Usuário já existe');
        }
    }

    validar(){
        this.cleanUp();

        //valida email
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Email Inválido');
        }

        //senha entre 6 e 15
        if(this.body.password.length < 6 || this.body.password.length >= 15){
            this.errors.push('Senha deve ter entre 6 e 15 caracteres');
        }
    }

    cleanUp(){ //garantir que é uma sstring
        for(let key in this.body){
            if(typeof(this.body[key]) !== 'string'){
                this.body[key] = '';
            };
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }

    userId(){
        console.log(this.user._id);
    }
}

module.exports = Login;