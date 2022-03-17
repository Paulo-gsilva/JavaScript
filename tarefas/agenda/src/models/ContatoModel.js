const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true}, //required força que exista o valor
    sobrenome: {type: String, required: false, default: ''}, //default completa o valor da chave caso nao seja passado
    email: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    dataCriacao: {type: Date, required: false, default: Date.now}
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register(){
        this.validar();
        if(this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body); //this.contato recebe o contato registrado
    }

    validar(){
        this.cleanUp();

        //valida email
        //caso exista um email cadastrado nos contatos...
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email Inválido');
        if(!this.body.nome) this.errors.push('Campo obrigatório');
        if(!this.body.email && !this.body.telefone){
            this.errors.push('Preencha Email ou Telefone');
        }
    }

    cleanUp(){ //garantir que é uma sstring
        for(let key in this.body){
            if(typeof(this.body[key]) !== 'string'){
                this.body[key] = '';
            };
        }
    
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        }
    }

    async edit(id){
        if(typeof(id) !== 'string') return;
        this.validar();
        if(this.errors.length > 0) return;

        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true}); //pega o id do banco e substitui pelo que foi escrito
    }

    static async buscaId(id){
        if(typeof(id) !== 'string') return;
        const user = await ContatoModel.findById(id);
        return user;
    }

    static async buscaContato(id){
        const user = await ContatoModel.find()
            .sort({criadoEm: -1});
        return user;
    }
}

module.exports = Contato;