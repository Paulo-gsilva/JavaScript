const numero = Number(prompt('Digite um número:'));
const valorEntrada = document.getElementById('valor-entrada');
const valores = document.getElementById('valores');

valorEntrada.innerHTML = numero;

valores.innerHTML += `Raiz quadrada: <em>${numero ** (1/2)}<em><br>`
valores.innerHTML += `<em>${numero}<em> é inteiro: <em>${Number.isInteger(numero)}<em><br>`
valores.innerHTML += `<em>${numero}<em> é NaN: <em>${Number.isNaN(numero)}<em><br>`
valores.innerHTML += `Arredondando para baixo: <em>${Math.floor(numero)}<em><br>`
valores.innerHTML += `Arredondando para cima: <em>${Math.ceil(numero)}<em><br>`
valores.innerHTML += `Número com duas casas decimais: <em>${numero.toFixed(2)}<em><br>`