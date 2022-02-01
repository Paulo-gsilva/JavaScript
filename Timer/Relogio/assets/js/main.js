const time = document.querySelector('.tempo');
const init = document.querySelector('.iniciar');
const stop = document.querySelector('.parar');
const zero = document.querySelector('.zerar');
let seconds = 0;
let timer;

function getTimeSecond(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    }); 
}

function initCLock(){
    timer = setInterval(function(){
        seconds++;
        time.innerHTML = getTimeSecond(seconds);
    }, 1000);
}

init.addEventListener('click', function(event){
    time.classList.remove('stoped');
    clearInterval(timer);
    initCLock();
});

stop.addEventListener('click', function(event){
    /*setTimeout(function(){
        clearInterval(timer);
    }, 0);*/
    clearInterval(timer); //pausa tempo, seconds fica em ação dentro da variavel timer
    time.classList.add('stoped');

});

zero.addEventListener('click', function(event){
    seconds = 0;
    time.innerHTML = getTimeSecond(seconds);
    clearInterval(timer);
    time.classList.remove('stoped');
}); 


/*  MANEIRA CURTA  
document.addEventListener('click', function(event){
    const element = event.target;
    
    if(element.classList.contains('zerar')){
        seconds = 0;
        time.innerHTML = getTimeSecond(seconds);
        clearInterval(timer);
        time.classList.remove('stoped');
    }

    if(element.classList.contains('iniciar')){
        time.classList.remove('stoped');
        clearInterval(timer);
        initCLock();
    }
    if(element.classList.contains('parar')){
        clearInterval(timer); //pausa tempo, seconds fica em ação dentro da variavel timer
        time.classList.add('stoped');
    }
})

*/