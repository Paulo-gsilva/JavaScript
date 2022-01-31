const frutas = ['Maçã', 'Uva', 'Banana', 'Pêra'];

/*
For classico -> geralmente com iteráveis (array ou string)
For in -> string, array e objetos
For of -> Iteráveis, arrays ou strings
*/

//for in -> lê índices ou chaves
/*for(let indice in frutas){
    console.log(frutas[indice]);
}

const pessoas = {
    nome: 'José',
    sobrenome: 'Miguel',
    idade: 24
}
for(let indice in pessoas){
    console.log(`${indice}:`,pessoas[indice]);
}*/

//for of -> conteudo do indice, só funciona com array
for(let indice of frutas){
    console.log(indice);
}