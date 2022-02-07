function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, 1000);  
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, 3000); 
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, 4000); 
}

/*  CALLBACK HELL
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!');
        });
    });
});*/ 

//CALLBACK FORÇA FUNÇÕES SEREM EXECUTADAS DEPOIS DE DETERMIANDAS FUNÇÕES
f1(f1Callback);
function f1Callback(){
    f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
    console.log('Banana');
}