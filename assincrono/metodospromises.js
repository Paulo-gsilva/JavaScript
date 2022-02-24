function rand(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof(msg) !== 'string'){
                reject('BAD VALUE');
                return;
            } 

            resolve(msg);
        }, time);
    });
}

/*Promise.all retorna todas as promessas RETORNA ARRAY
const promise = [
    'Um',
    wait('Dois', 3000),
    wait('Três', 3000),
    wait('Quatro', 3000),
    'Cincão'
]

Promise.race(promise)
    .then(msg => {
        console.log(msg);
    })
    .catch(error => {
        console.log(error);
    })
*/
    
//promise.race retorna a promisse mais rapida
//encontra a promise mais rápida, porém continua rodando as outras
const promise = [
    wait('Dois', 1000),
    wait('Três', 3000),
    wait('Quatro', 5000),
]

Promise.race(promise)
    .then(msg => {
        console.log(msg);
    })
    .catch(error => {
        console.log(error);
    })