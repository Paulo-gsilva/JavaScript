//MAP USAR VALORES DO ARRAY PARA FAZER MUDANÇAS, AFETA O ORIGINAL. CRIAR OUTRO OBJETO
const pessoas = [
    {nome: 'Paulo', idade: 13},
    {nome: 'Maria', idade: 25},
    {nome: 'Pedro', idade: 59},
    {nome: 'Ana', idade: 31},
    {nome: 'Matheus', idade: 54},
    {nome: 'Clara', idade: 21},
    {nome: 'Carlos', idade: 17},
]

//const dobro = array.map(array => array * 2)
//const nome = pessoas.map(string => string.nome);
//const idade = pessoas.map(string => ({idade: string.idade}));
const idPessoas = pessoas.map(function(objeto, indice){ //(valor, indice, array)
    objeto.id = indice;
    return objeto;
});
console.log(idPessoas);