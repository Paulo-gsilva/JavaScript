//Factory Functions
function createPerson(name, surname, weight, height){
    return{
        name,
        surname,
        weight, 
        height,

        sayName(name, surname){
            return `Oi, meu nome é ${this.name} ${this.surname}`; //this faz referência ao valor chamado
        },

        //GETTER, APENAS OBTER O VALOR
        imc(weight, height){ //get imc
            const imc = (this.weight / (this.height * this.height));
            return `Meu imc equivale à ${imc.toFixed(2)}`
        }
    };
};

const person1 = createPerson('Paulo', 'Guilherme', 78, 1.82);
const person2 = createPerson('Camily', 'Viena', 65, 1.64);

console.log(person1.sayName());