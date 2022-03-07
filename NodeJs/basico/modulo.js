const name = 'Pedro';
const surname = 'Pereira';

const fullName = () => `${name} ${surname}`
const count = () => 1 +1;
//exportando
//exports.
//module.exports.name = name;
//module.exports.surname = surname;
//module.exports.fullName = fullName; 
module.exports = {
    name, surname, fullName
}
