const form = document.querySelector('.form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputNumero1 = event.target.querySelector('#numero1');
    const inputNumero2 = event.target.querySelector('#numero2');

    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');

    p.innerHTML = maiorNumero(numero1, numero2);
    resultado.appendChild(p);
});


function maiorNumero(numero1, numero2){
    const maior = numero1 > numero2 ? `Número ${numero1} é maior!` : `Número ${numero2} é maior!`; 
    return maior;
}
