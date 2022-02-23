//Método estático: usados para criar funções de utilidades por uma aplicação. É uma função que fica dentro de uma classe, apenas a classe pode acessar.

class Test{
    constructor(name){
        this.name = name;
        this.idade = 12;
    }

    Birthday(){
        this.idade += 1;
        Test.hello();
    }

    static hello(){
        console.log('Hello');
    }
}

const teste = new Test('João');
teste.Birthday();
console.log(teste);