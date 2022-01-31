function verificaNumero(numero){
    if(numero % 3 == 0 && numero % 5 == 0){
        return 'FizzBuzz';
    }
    else if(numero % 3 == 0){
        return 'Fizz';
    }
    else
        return 'Buzz';
}

for(let i = 0 ; i < 100 ; i++){
    console.log(i, verificaNumero(i));
}
