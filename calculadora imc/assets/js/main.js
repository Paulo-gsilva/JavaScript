const form = document.querySelector('#formulario');

form.addEventListener('submit', function(evento){
    evento.preventDefault(); //impede formulario ser enviado
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é de ${imc}, você possui ${nivelImc}`;
    setResultado(msg, true);

});

function getImc(peso, altura){
    const imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso' ,'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9){
        return nivel[5];
    }
    if(imc >= 34.9){
        return nivel[4];
    }
    if(imc >= 29.9){
        return nivel[3];
    }
    if(imc >= 24.9){
        return nivel[2];
    }
    if(imc >= 18.5){
        return nivel[1];
    }
    if(imc < 18.5){
        return nivel[0];
    }
}

function criaParagrafo(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, validez){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if(validez){
        p.classList.add('paragrafo-positivo');
    }
    else{
        p.classList.add('paragrafo-negativo');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}

