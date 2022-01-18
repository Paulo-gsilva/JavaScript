const alunos = ['Maria', 'João', 'Carlos'];
console.log(alunos);
//console.log(alunos[0]);
//console.log(alunos[1]);
//console.log(alunos[2]);

alunos[0] = 'Joana';
console.log(alunos);
console.log(alunos[0]);
console.log(alunos.length);

//EXCLUIR ELEMENTOS DO ARRAY -- PODEMOS PASSAR VARIAVEIS
alunos.pop(); //EXCLUI O ULTIMO
console.log(alunos);

alunos.shift(); //EXCLUI O PRIMEIRO
console.log(alunos);

//FORMAS DE ADICIONAR NO COMEÇO DO ARRAY
alunos.unshift('Paulo');
console.log(alunos);
console.log(alunos[0]);

//FORMAS DE ADICIONAR AO FINAL DO ARRAY
//alunos[3] = 'Fernando';
//console.log(alunos);

alunos[alunos.length] = 'José';
console.log(alunos);

alunos.push('Camila'); //MAIS INDICADO
console.log(alunos);