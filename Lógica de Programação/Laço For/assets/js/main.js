const elements = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'p', texto: 'Frase2'},
    {tag: 'p', texto: 'Frase3'},
    {tag: 'p', texto: 'Frase4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0 ; i < elements.length ; i++){
    //console.log(elements[i].texto); //.tag/.texto
    let {tag, texto} = elements[i]; //atribuição via desestruturação
    let createTag = document.createElement(tag);
    createTag.innerText = texto;

    div.appendChild(createTag);
}

container.appendChild(div);