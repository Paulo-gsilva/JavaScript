const person = new Object;
person.name = 'Paulo';
person.surname = 'Guilherme'
person.age = 20;
person.hello = function(){ //funções dentro de objetos são métodos
    return (`Hello, ${this.name} ${this.surname}`);
};
person.getBirthDate = function(){
    const date = new Date();
    return date.getFullYear() - this.age;
}
console.log(person.getBirthDate());