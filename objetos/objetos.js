/*const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'Guilherme',
    idade: 20
};

console.log(pessoa1.nome);

function geraPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = geraPessoa('Paulo', 'Guilherme', 20);
console.log(pessoa1.nome);
*/

const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'Guilherme',
    idade: 20,

    fala(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }

};

pessoa1.fala();




