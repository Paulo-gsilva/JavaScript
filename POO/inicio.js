class Person{ //PODE-SE ACESSAR OS ATRIBUTOS DENTRO DA PRÓPRIA CLASSE
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    };

    hello(){
        console.log(`Hello, my name is ${this.name} ${this.surname}`);
    };
}

const joao = new Person('Paulinho', 'Lindo');
joao.hello();
console.log(joao);