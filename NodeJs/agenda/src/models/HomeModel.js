const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    id: {type: Number, required: true}, //required força que exista o valor
    nome: {type: String, required: true}
});

const HomeModel = mongoose.model('Home', HomeSchema);
//module.exports = HomeModel;