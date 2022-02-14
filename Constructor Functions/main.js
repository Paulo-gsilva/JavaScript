function Person(name, surname){
    //É POSSÍVEL CRIAR VARIAVEIS PRIVADAS
    const id = 123466;

    this.name = name;
    this.surname = surname;

    this.myName = function(){
        console.log(`Oi, meu nome é ${person1.name} ${person1.surname}`);
    }

    Object.freeze(this);
}

const person1 = new Person('Paulo', 'Guilherme'); //new cria um espaço vazio e armazena os valores de this
person1.name = 'Lindo'; //para impedir mudanças de valores, usar object.freeze(variavel)
console.log(person1.name);