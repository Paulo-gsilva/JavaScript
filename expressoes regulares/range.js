const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'

//[] - conjunto
//[^] - negação conjunto
//[x-y] - range

//console.log(alfabeto.match(/[^abc]/g));
//console.log(alfabeto.match(/[0-9]+/g)); //com o sinal de + ele retorna a sequencia do inicio ao fim
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)); // [a-zA-Z0-9]+ === \w+    // [^a-zA-Z0-9]+ === \W