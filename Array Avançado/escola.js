const student = [
    {name: 'Paulo', note1: 7, note2: 8, note3: 4, note4: 10},
    {name: 'Thomas', note1: 7, note2: 3, note3: 6, note4: 3},
    {name: 'Ana', note1: 7, note2: 8, note3: 10, note4: 10},
    {name: 'Pedro', note1: 5, note2: 5, note3: 6, note4: 10},
    {name: 'Fernanda', note1: 8, note2: 8, note3: 8, note4: 4},
    {name: 'Joana', note1: 7, note2: 8, note3: 4, note4: 4},
    {name: 'Joaquim', note1: 7, note2: 8, note3: 10, note4: 10},
    {name: 'Luis', note1: 6, note2: 4, note3: 0, note4: 10},
    {name: 'Yan', note1: 4, note2: 6, note3: 8, note4: 4},
    {name: 'Camily', note1: 8, note2: 9, note3: 7, note4: 10}
]

function listStudent(){
    student.forEach((value, index) => console.log(`Aluno[${index + 1}]: ${value.name}`));  //foreach(value, index, array)
}

function average(){
    student.forEach(function(value){
        var avarageStudents = (value.note1 + value.note2 + value.note3 + value.note4) / 4;
        console.log(`${value.name}: ${avarageStudents}`);
    });
}

function aproved(){
    student.filter(function(value){
        let avarageStudents = (value.note1 + value.note2 + value.note3 + value.note4) / 4;
        if(avarageStudents > 7) console.log(`${value.name}: ${avarageStudents}`);
    });
}

function reproved(){
    student.filter(function(value){
        let avarageStudents = (value.note1 + value.note2 + value.note3 + value.note4) / 4;
        if(avarageStudents < 7) console.log(`${value.name}: ${avarageStudents}`);
    });
}

function option(number){
    switch (number) {
        case 1:
            console.log('Lista de Alunos:');
            listStudent();
        break;
    
        case 2:
            console.log('Média dos Aluno: ');
            average();
        break;

        case 3:
            console.log('Aprovados: ');
            aproved();
        break;

        case 4:
            console.log('Reprovados: ');
            reproved();
        break;

        default:
        break;
    }
}

option(3);