import geraPassword from "./geradores";
const button = document.querySelector('.senha');
const numero = document.getElementById('numero');
const maiuscula = document.getElementById('maiuscula');
const minuscula = document.getElementById('minuscula');
const simbolo = document.getElementById('simbolo');
const quantidade = document.getElementById('quantidade');
const result = document.querySelector('.resultado');

export default () => {
    button.addEventListener('click', () => {
        result.innerHTML = generate();
    });
}

function generate(){
    const password = geraPassword(quantidade.value, maiuscula.checked, minuscula.checked, numero.checked, simbolo.checked);
    return password || 'Nada Selecionado';
}