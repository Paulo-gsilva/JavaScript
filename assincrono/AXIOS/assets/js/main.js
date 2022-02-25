/*
fetch('pessoas.json') //pega os dados
    .then(response => response.json()) //converte em JSON e envia outra promise
    .then(json => loadElement(json)); //captura a promise anterior
*/

axios('pessoas.json')
    .then(response => loadElement(response.data));

function loadElement(json){
    for(let pessoa of json){
        console.log(`Nome:${pessoa.nome} Idade: ${pessoa.idade}`);
    }
}