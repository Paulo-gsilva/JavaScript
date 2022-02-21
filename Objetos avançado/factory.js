const hello = { 
    hello(name, surname){
        return `Hello, my name is ${this.name} ${this.surname}`
    }
}

const imc = { 
    imc(weight, height){
        return(this.weight/(this.height*this.height)).toFixed(2);
    }
}

//COMPOSIÇÃO
const personPrototype = Object.assign({}, hello, imc);
function createPerson(name, surname, height, weight){
    return Object.create(personPrototype, {
        name: {value: name},
        surname: {value: surname},
        weight: {value: weight},
        height: {value: height},
    });
}

//CADA OBJETO CRIADO IRÁ RECEBER OS MÉTODOS DA FUNÇÃO, CONSOME RECURSOS
const joao = createPerson('João', 'Rodrigues', 1.8, 80);
const maria = createPerson('Maria', 'Fernanda', 1.55, 62);
console.log(joao);
console.log(maria);