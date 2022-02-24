function rand(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof(msg) !== 'string'){
            reject('BAD VALUE');
            return;
        } 
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

//THEN É EXECUTADO QUANDO O RESOLVE FOR ACEITO
wait('Conectando Bando de Dados...', rand(1, 3))
    .then(msg => {
        console.log(`1. ${msg}`);
        return wait('Carregando Contatos...', rand(1, 3));
    })
    .then(msg => {
        console.log(`2. ${msg}`);
    })
    .then(msg => {
        console.log('3. Achei uma banana!!!');
        return wait('Comi a banana', rand(1, 3));
    }) //como está encadeado, ele só será executado quando os anteriores forem executados
    .then(msg => {
        console.log(`4. ${msg}`);
        return wait('Voltando aos Processos...', rand(1, 3));
    })
    .then(msg => {
        console.log(`5. ${msg}`);
        return wait(2122, rand(1, 3));
    })
    .catch(error => {
        console.log('Erro: ', error); //EXECUTADO QUANDO ENCONTRA ERROS
    });


console.log('Sou executado primeiro porque as promises funcionam em paralelo. JS não gosta de esperar promessas :D');
