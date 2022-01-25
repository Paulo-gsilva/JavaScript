let horario = 25;
if(horario > 0 && horario < 5){
    console.log('Boa Madrugada');
}
else if(horario > 5 && horario < 12){
    console.log('Bom dia');
}
else if(horario > 12 && horario < 18){
    console.log('Boa tarde');
}
else if(horario > 18 && horario < 24){
    console.log('Boa noite');
}
else{
    console.log('Horário indefinido');
}