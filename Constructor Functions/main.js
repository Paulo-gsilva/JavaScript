function Person(name, surname){
    //É POSSÍVEL CRIAR VARIAVEIS PRIVADAS
    const id = 123466;

    this.name = name;
    this.surname = surname;

    this.myName = function(){
        console.log(`Oi, meu nome é ${person1.name} ${person1.surname}`);
    }
}

const person1 = new Person('Paulo', 'Guilherme');
person1.name;