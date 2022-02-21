//funcionarios
//Professor, aluno, faxineiro

function Funcionarios(name, surname, cpf){
    this.name = name;
    this.surname = surname;
    this.cpf = cpf;
}

Funcionarios.prototype.hello = function(){
    console.log(`Oi, meu nome é ${this.name} ${this.surname}`);
}

function Professor(name, surname, cpf, disciplina){
    Funcionarios.call(this, name, surname, cpf);
    this.disciplina = disciplina;
}

Professor.prototype = Object.create(Funcionarios.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.hello = function(){
    console.log(`Oi, meu nome é ${this.name} ${this.surname} e sou professora de ${this.disciplina}`);
}

function Faxineiro(name, surname, cpf, horario){
    Funcionarios.call(this, name, surname, cpf);
    this.horario = horario;
}

Faxineiro.prototype = Object.create(Funcionarios.prototype);
Faxineiro.prototype.constructor = Faxineiro;

const func = new Funcionarios('Paulo', 'Guilherme', 12345678);
const prof = new Professor('Janaina', 'Fernandes', 12345675, 'Inglês');
//prof.hello(); //recebe o hello de professor por ser o primeiro na fila de prototype
const faxi = new Faxineiro('Camily', 'Viena', 32424534, '10:00');
console.log(faxi);
faxi.hello();
console.log(prof);



