function Person(name, surname, age, address){
    this.name = name;
    this.surname = surname;
    this.age = age;

    Object.defineProperty(this, 'address', { //objeto, chave
        enumerable: true, //mostrar chave?
        //value: address,
        //writable: false, pode alterar? GET E SET NAO NECESSITA DE VALUE E WRITABLE
        configurable: false, //pode apagar, atualizar?

        get: function(){
            return address;
        },

        set: function(value){
            if(typeof value !== 'string'){
                console.log('Valor Inválido');
                return;
            }

            address = value; //caso não haja novos valores, address reeberá o último valor passado
        }
    });
    //Object.freeze(this); não recomendado
};

const person1 = new Person('João', 'Silva', 35, 'Bairro de Fátima');

person1.address = 5454;

console.log(person1);
console.log(person1.address);