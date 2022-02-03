const work = document.querySelector('.tarefa');
const button = document.querySelector('.botao-tarefa');
const list = document.querySelector('.lista-tarefa');

function cleanTextBar(){ //LIMPAR TEXTO DA BARRA 
    work.value = '';
}


function createLi(){ //cria tag li
    const li = document.createElement('li');
    return li;
}

function createButtonDelete(){
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.setAttribute('class', 'apagar-tarefa');
    button.setAttribute('title', 'Apagar tarefa');
    return button;
}

function createAssig(text){
    const li = createLi();
    const button = createButtonDelete();

    li.innerHTML = text;
    li.appendChild(button);
    list.appendChild(li);
    cleanTextBar();
    saveAssig();
}

document.addEventListener('click', function(event){
    const element = event.target; //verificar qual elemento está sendo clicado
    
    if(element.classList.contains('apagar-tarefa')){ //caso exista uma classe chamada apagar-tarefa, o if será executado
        element.parentElement.remove();
        saveAssig();
    }
});

button.addEventListener('click', function(event){ //ADICIONANDO AO USAR O MOUSE
    if(!work.value) return;
    createAssig(work.value);
});

work.addEventListener('keypress', function(event){ //ADICIONANDO AO PRESSIONAR ENTER
    if(event.key === 'Enter'){
        if(!work.value) return;
        createAssig(work.value);
    }
});

function saveAssig(){
    const liAssig = list.querySelectorAll('li');
    const listAssig = [];

    for(let index of liAssig){
        let assigText = index.innerText;
        assigText = assigText.replace('Apagar', '');
        listAssig.push(assigText);
    }
    
    const assigJSON = JSON.stringify(listAssig);
    localStorage.setItem('tarefas', assigJSON);
}

function addAssigSaved(){
    const assig = localStorage.getItem('tarefas');
    const listAssig = JSON.parse(assig);

    for(let index of listAssig){
        createAssig(index);
    }
}

addAssigSaved();
