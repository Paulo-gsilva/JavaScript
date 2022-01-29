/*
const h1 = document.querySelector('.texto');
const data = new Date();

function getDayWeek(dayWeek) {
    let day;
    switch(dayWeek) {
        case 0:
            day = 'Hoje é Domingo';
            return day;
        break;
    
        case 1:
            day = 'Hoje é Segunda-Feira';
            return day;
        break;
    
        case 2:
            day = 'Hoje é Terça-Feira';
            return day;
        break;
    
        case 3:
            day = 'Hoje é Quarta-Feira';
            return day;
        break;
    
        case 4:
            day = 'Hoje é Quinta-Feira';
            return day;
        break;
    
        case 5:
            day = 'Hoje é Sexta-Feira';
            return day;
        break;
    
        case 6:
            day = 'Hoje é Sábado';
            return day;
        break;
    
        default:
        break;
    }
}

function getMonth(numberMonth){
    let month;

    switch(numberMonth){
        case 0:
            month = 'Janeiro';
            return month;
        break;
        case 1:
            month = 'Fevereiro';
            return month;
        break;
        case 2:
            month = 'Março';
            return month;
        break;
        case 3:
            month = 'Abril';
            return month;
        break;
        case 4:
            month = 'Maio';
            return month;
        break;
        case 5:
            month = 'Junho';
            return month;
        break;
        case 6:
            month = 'Julho';
            return month;
        break;
        case 7:
            month = 'Agosto';
            return month;
        break;
        case 8:
            month = 'Setembro';
            return month;
        break;
        case 9:
            month = 'Outubro';
            return month;
        break;
        case 10:
            month = 'Novembro';
            return month;
        break;
        case 11:
            month = 'Dezembro';
            return month;
        break;
    }
}

h1.innerHTML = `${getDayWeek(data.getDay())}, ${data.getDate()}, do mês de ${getMonth(data.getMonth())}, no ano ${data.getFullYear()}`;
*/

const h1 = document.querySelector('.texto');
const data = new Date();
h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date());