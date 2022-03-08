/*const fs = require('fs').promises;
const path = require('path');
const arquiveDir = path.resolve(__dirname, '..', 'test.json') //forma o caminho

const pessoas = [
    {nome: 'João'},
    {nome: 'Joana'},
    {nome: 'Pedro'},
    {nome: 'Paulo'},
    {nome: 'José'}
]

const json = JSON.stringify(pessoas, '', 2);

fs.writeFile(arquiveDir, json, {flag: 'w'});
//w - sobrescreve texto do arquivo
//a - acopla textos*/

const fs = require('fs').promises;

module.exports = (dir, type, flag) =>{
    fs.writeFile(dir, type, {flag: flag});
}
//fs.writeFile(arquiveDir, json, {flag: 'w'});
//w - sobrescreve texto do arquivo
//a - acopla textos
