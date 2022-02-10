//FILTER: FILTRA VALORES DETERMINADOS, SEMPRE RETORNA UM ARRAY
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const pessoas = [
    {nome: 'Paulo', idade: 13},
    {nome: 'Maria', idade: 25},
    {nome: 'Pedro', idade: 59},
    {nome: 'Ana', idade: 31},
    {nome: 'Matheus', idade: 54},
    {nome: 'Clara', idade: 21},
    {nome: 'Carlos', idade: 17},
]

/*
function filter(array){
    return array.filter(function(num){
        return num > 10;
    });   
}

const filter = array.filter(function(num){
    return num > 10;
});
*/

//const filter = array.filter(num => num > 10);
//const filter = pessoas.filter(num => num.idade > 50);
//const filter = pessoas.filter(string => string.nome.length >= 5);
const filter = pessoas.filter(string => string.nome.toLowerCase().endsWith('a'));
//toLowerCase: deixa as palavras todas em minusculas para ocorrer apenas uma checagem
//endsWith: especifica o termino da palavra
console.log(filter);