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
/*
wait('Fase 1', rand(1, 3))
    .then(value => {
        console.log(value);
        return wait('Fase 2', rand(1, 3));
    })
    .then(value => {
        console.log(value);
        return wait('Fase 3', rand(1, 3));
    })
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });
*/

async function execute(){
    try{
        const fase1 = await wait('Fase 1', rand(1, 3));
        console.log(fase1);
        const fase2 = await wait('Fase 2', rand(1, 3));
        console.log(fase2);
        const fase3 = await wait('Fase 3', rand(1, 3));
        console.log(fase3);

    }catch(e){
        console.log(e);
    }

}

execute();
