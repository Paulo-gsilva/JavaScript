let nome = 'Paulo'; //let é usado para criar variáveis
const sobrenome = 'Gonçalves' //const é usado para criar constantes
let idade = 21;

console.log(idade);
console.log(nome, sobrenome, 'nasceu em 2001');
console.log('Em 2004', nome, 'entrou na escola');
console.log('O ensino médio de', nome, 'acabou em 2019');
console.log(nome, 'tornou-se universitário após a conclusão');

console.log('');
console.log(typeof(idade)); //verifica o tipo da variavel/constante
console.log(typeof(nome));
console.log(typeof(nome + idade)); //nome é uma string, logo a soma deles ficará Paulo21
console.log(typeof(idade + idade)); //42


/*
Diferença var e let: 
com var podemos redeclarar variaveis, com let nao. EX:
var nome = 'paulo';
var nome = 'guilherme';

com let isso ocosarionaria erro
*/

//let numero = '5'; //string
let numero = Number('5'); //converte para numero
console.log(typeof(numero));

