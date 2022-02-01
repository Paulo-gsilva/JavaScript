//setInterval inicia uma contagem de tempo
//setTimeout barra a contagem de tempo

function showHour(){
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

const time = setInterval(function(){
    console.log(showHour());
}, 1000);

setTimeout(function(){
    clearInterval(time);
    console.log('Tempo encerrado!');
}, 5000);