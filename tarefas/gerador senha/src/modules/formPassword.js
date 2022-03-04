import geraPassword from "./geradores";

const button = document.querySelector('.senha');

button.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(geraPassword(10, 'true', 'true'));
    
})