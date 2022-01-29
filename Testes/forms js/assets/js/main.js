const form = document.querySelector('.form');

form.addEventListener('submit', function(event){
    event.preventDefault(); //impede que o formulário seja enviado
    const name = event.target.querySelector('#name').value;
    const subname = event.target.querySelector('#subname').value;

    if(!name){
        setResult('Nome vazio', false);
        return;
    }
    if(!subname){
        setResult('Sobrenome vazio', false);
        return;
    }

    const msg = `Olá, ${name} ${subname}. Seja Bem-Vindo!`;
    setResult(msg, true);

});

function setResult(msg, valid){
    const result = document.querySelector('.entrada');
    result.innerHTML = '';
    const p = document.createElement('p');

    if(valid){
        p.classList.add('paragrafo-positivo');
    }
    else{
        p.classList.add('paragrafo-negativo');
    }

    p.innerHTML = msg;
    result.appendChild(p);
} 