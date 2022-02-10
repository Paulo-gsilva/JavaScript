const pessoa = 'Paulo Guilherme da Silva Gonçalves';
const eu = [ 'Paulo', 'Guilherme', 'da', 'Silva', 'Gonçalves' ];
//                  0         1             2        3        4
const alunos = ['Paulo', 'Guilherme', 'Fernando', 'Maria', 'João'];
//                -5         -4           -3        -2       -1

//console.log(eu.join(' ')); //ARRAY EM STRING
//console.log(pessoa.split(' ')); //STRING EM ARRAY
//console.log(alunos.slice(-2, -2));

//splice(indice, delete, adiciona1, adiciona2, ....) elementos removidos se tornam um array
//pop
//const removidos = alunos.splice(4, 1);
//shift
//const removidos = alunos.splice(0, 1);
//unshift
//const novo = alunos.splice(0, 0, 'Pedro');
//push
alunos.splice(2, 1);
console.log(alunos);