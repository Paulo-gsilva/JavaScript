/*function saudacao(nome){
    console.log(`Oi, meu amigo ${nome}`);
}

const variavel = saudacao('Paulo'); 

function soma(x, y){
    let resultado = x + y;
    return resultado;
}
*/

const soma = function (x, y){ //FUNÇÃO ANONIMA
    return x + y;
};

console.log(soma(3, 5));