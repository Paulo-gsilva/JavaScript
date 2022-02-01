//conferir se numeros sao iguais
//soma está entre 10 e 20
function soma(numero1, numero2) {
    const soma = numero1 + numero2;
    return soma;
}

function dezOuVinte(numero){
    const entrenumero = numero >= 10 && numero <= 20 ? `O número ${numero} está entre 10 e 20` : `O número ${numero} não está entre 10 e 20`;
    console.log(entrenumero);
}

const somatorio = soma(12,9);
const entre = dezOuVinte(somatorio);
