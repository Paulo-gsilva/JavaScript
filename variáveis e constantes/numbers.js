let num1 = 1;
let num2 = 2;

console.log(num1 + num2);
console.log((num1 + num2).toString(2)); //toString(2) MOSTRA O VALOR NA FORMA BINARIA
console.log(typeof(num1));
console.log(Number.isInteger(num1));
console.log(num1.toString() + num2); //.toString CONVERTE O VALOR NUMA STRING, APENAS NESSA LINHA
num1 = num1.toString(); //NESSE CASO, NUM1 VIROU STRING PARA SEMPRE
console.log(num1 + num2);
console.log(Number.isInteger(num1));//VERIFICA SE NUM1 É INTEIRO

let num3 = 0.378;
let num4 = 0.556;

console.log(num3 + num4);
console.log((num3 + num4).toFixed(2)); //toFixed NUMERO DE CASAS DECIMAIS



