//split separa string em um array
//join junta os elementos de um array e forma uma string

class NamePerson{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    };

    get fullName(){
        console.log("GETTER");
        return `${this.name} ${this.surname}`
    }

    set fullName(value){
        console.log("SETTER")
        if(typeof value === 'number') return;
        value = value.split(' ');
        this.name = value.shift();
        this.surname = value.join(' ');
    }

}

const joao = new NamePerson('Joao', 'Guilherme');
joao.fullName = 'Maria Gabi'
console.log(joao.fullName)
