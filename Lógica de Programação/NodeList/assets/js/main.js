const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundBody = estiloBody.backgroundColor;
console.log(backgroundBody);

for(let i of p){
    i.style.backgroundColor = backgroundBody;
    i.style.color = 'white';
    i.style.textTransform = 'Uppercase';
}