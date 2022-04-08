const text = `João trouxe flores para sua amada namorada em de Janeiro de 1970,
Maria era o nome dela.

Foi um ano excelente na vida de joão. teve 5 filhos, todos adultos atualmente. maria,
hoje sua esposa, ainda faz aquele café com pão de queijo nas tarde de domingo. Também né!
Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo. 
Não canso de ouvir a Maria:
"Joooooooooooooooãooooo, o café ta prontinho aqui. Veeeeeeem!"
`;

const regExp = /João/;
const regExp2 = /(Foi|Irá) (um ano excelente)/i;
//após a última barra entram as flags
//busca o que for literalmente igual ao que está dentro das barras
//      / expressão regular / flag

// g - encontra todas as ocorrencias
// i - busca apenas o que está dentro da expressão, busca a mesma palavra estando minuscula ou maiuscula
// () - divide em grupos
// | - OU

const found = regExp2.exec(text);
console.log(found);
//test - verifica se o que está dentro da expressão existe
//exec - retorna um objeto
