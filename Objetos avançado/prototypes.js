function Person(name, surname){ //função construtora -> molde (classe)
    this.name = name;
    this.surname = surname;
}

Person.prototype.completeName = function(){
    return `${this.name} ${this.surname}`;
}

//instância
const person1 = new Person('Paulo', 'Guilherme');
const person2 = new Person('Camily', 'Viena');

console.log(person1.completeName());
console.log(person2);