const text = `João trouxe flores para sua amada namorada em de Janeiro de 1970,
Maria era o nome dela.

Foi um ano excelente na vida de joão. teve 5 filhos, todos adultos atualmente. maria,
hoje sua esposa, ainda faz aquele café com pão de queijo nas tarde de domingo. Também né!
Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo. 
Não canso de ouvir a Maria:
"Joooooooooooooooãooooo, o café ta prontinho aqui. Veeeeeeem!"
`;

const regExp = /João|Maria/gi;
// g - encontra todas as ocorrencias
// i - busca apenas o que está dentro da expressão, busca a mesma palavra estando minuscula ou maiuscula
// | - OU

const match = text.match(regExp);
//match retorna um objeto
console.log(match);

//const replace = text.replace(/João/gi, 'Felipe');
const replace = text.replace(/João/gi, (input) => {
    return input.toUpperCase();
});

console.log(replace);
