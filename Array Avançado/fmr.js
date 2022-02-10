const array = [1, 4, 5, 6, 9, 11, 12, 15];

const mistura = array.filter(function(num){
    return num % 2 === 0;  
}).map(function(array){
    return array * 2;
}).reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
});

//const mistura = 
//array.filter(num => num % 2 === 0).map(array => array * 2).reduce((acumulador, valor) => (acumulador += valor));


console.log(mistura);