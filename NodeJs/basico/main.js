const modulo = require('./modulo');
const Animal = require('./modulo2');
//const surname = require('./modulo').surname; //importa apenas uma chave
//const {name, surname, fullName} = require('./modulo');

const dog = new Animal('Pluto', 'Auau');
console.log(dog.talkAnimal());