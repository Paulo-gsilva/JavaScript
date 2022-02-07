function argument(){
    let soma = 0;
    for(let indexArguments of arguments){
        if(typeof(indexArguments) === 'number'){
            soma += indexArguments;
        }
        else
            console.log(`${indexArguments} é uma string`);
    }
    console.log(soma);
}

argument('cachorro', 1, 2, 'banana', 4, 5, 6);