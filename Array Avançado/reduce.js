//REDUCE: REDUZ UM ARRAY A UM ÚNICO VALOR

const array = [1, 4, 5, 6, 9, 11, 12, 15];
const pessoas = [
    {nome: 'Paulo', idade: 13},
    {nome: 'Maria', idade: 25},
    {nome: 'Pedro', idade: 59},
    {nome: 'Ana', idade: 31},
    {nome: 'Matheus', idade: 54},
    {nome: 'Clara', idade: 21},
    {nome: 'Carlos', idade: 17}
];

const soma = array.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
});

const pares = array.filter(num => num % 2 === 0);

const dobro = array.map(num => num *= 2);

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor, indice, array){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);

