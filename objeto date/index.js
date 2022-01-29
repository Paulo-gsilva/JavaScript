/*const data = new Date();
const data2 = new Date(2020, 2, 12, 14, 43, 23, 1000);
const data3 = new Date('2022-03-13 21:23:45');
console.log(data3.toString());*/
function adicionarZero(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = adicionarZero(data.getDate());
    const mes = adicionarZero(data.getMonth() + 1);
    const ano = adicionarZero(data.getFullYear());
    const hora = adicionarZero(data.getHours());
    const minuto = adicionarZero(data.getMinutes());
    const segundo = adicionarZero(data.getSeconds());

    return `São ${hora}:${minuto}:${segundo} do dia ${dia}/${mes}/${ano}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);