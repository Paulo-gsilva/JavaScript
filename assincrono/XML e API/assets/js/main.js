const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); //FAZ REQUISIÇÃO DE SITES, ARQUIVOS, JSON E ETC
        xhr.open(obj.method, obj.url, true); //xhr.open('GET', url', true) FAZ A REQUISIÇÃO
        xhr.send();

        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                //obj.success(xhr.responseText);
                resolve(xhr.responseText);    
            }
            else{
                //obj.error(xhr.statusText);
                reject(xhr.statusText);   
            }
        });
    });
};

document.addEventListener('click', event => {
    const element = event.target; //verifica o elemento que está sendo clicado
    const tag = element.tagName.toLowerCase(); //RECEBENDO A TAG CLICADA E CONVERTENDO PARA LOWERCASE
    
    if(tag === 'a'){
        event.preventDefault();
        loadPage(element);
    }
});


async function loadPage(element){
    try{    
    const href = element.getAttribute('href');
    const response = await fetch(href);

    if(response.status !== 200) throw new Error('Erro 404');

    const html = await response.text();
    loadResult(html);
    }
    catch (e){
        console.log(e);
    }

    /*
    fetch(href)
        .then(response => response.text())
        .then(html => loadResult(html))
        .catch(error => console.error(error)); */
}


/*
function loadPage(element){
    const href = element.getAttribute('href');
    
    const objConfif = {
        method: 'GET',
        url: href
    }
    
    request(objConfif).then(response => {
        loadResult(response);
    }).catch(error => console.log(error));
}

async function loadPage(element){
    const href = element.getAttribute('href');
    
    const objConfif = {
        method: 'GET',
        url: href
    }
    
    try{
      const response = await request(objConfif);
        loadResult(response);  
    }catch(error){
        console.log(error);
    }
    
}


function loadPage(element){
    const href = element.getAttribute('href');

    request({
        method: 'GET',
        url: href,
        success(response){
            loadResult(response);
        },
        error(errorText){
            console.log(errorText);
        }
    }); 
}
*/

function loadResult(response){
    const div = document.querySelector('.resultado');
    div.innerHTML = response;
}

