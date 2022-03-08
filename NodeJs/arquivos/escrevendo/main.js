const write = require('./modules/write')
const read = require('./modules/read');
const path = require('path');
const arquiveDir = path.resolve(__dirname, 'test.txt') //forma o caminho

//ESCREVER
/*
const pessoas = [
    {nome: 'João'},
    {nome: 'Joana'},
    {nome: 'Pedro'},
    {nome: 'Paulo'},
    {nome: 'José'}
]

const json = JSON.stringify(pessoas, '', 2);
        //DIRETORIO //CONSTANTE //FLAG
write(arquiveDir, json, 'w');*/

async function readArq(dir){
    const data = await read(dir);
    return data;
}

const data = readArq(arquiveDir)
    .then(data => console.log(data));