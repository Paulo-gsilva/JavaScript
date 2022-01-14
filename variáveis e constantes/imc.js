const nome = 'Paulo';
const sobrenome = 'Gonçalves';
let idade = 21;
let peso = 82;
let altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

//console.log(nome, sobrenome, 'nasceu em',anoNascimento + '. Tem', idade, 'anos, pesa', peso, 'kg e possui', altura, 'de altura. Seu IMC é de:', imc)

//template strings
//forma mais legível
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}. Tem ${idade} anos, pesa ${peso} kg e possui altura de ${altura}. Seu IMC é de: ${imc}`);