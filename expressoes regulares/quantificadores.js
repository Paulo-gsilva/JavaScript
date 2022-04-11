const text = `João trouxe flores para sua amada namorada em de Janeiro de 1970,
Maria era o nome dela.

Foi um ano excelente na vida de joão. teve 5 filhos, todos adultos atualmente. maria,
hoje sua esposa, ainda faz aquele café com pão de queijo nas tarde de domingo. Também né!
Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo. 
Não canso de ouvir a Maria:
"Joooooooooooooooãooooo, o café ta prontinho aqui. Veeeeeeem!"
`;

const list = [
    'Atenção.jpg',
    'FOTOS.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.png',
    'Carro.JPEG',
    'lista.txt'
]

// + (obrigatório) 1 ou n {1, }
// * (opcional) 0 ou n {0, }
// ? (opcional) 0 ou 1 {0, 1}
// \ caractere de escape
// {minimo de vezes, máximo de vezes}

//const regExp = /Jo+ão+/gi
//vai encontrar palavras com a ocorrencia de vários "o" consecutivos
//const found = text.match(regExp);

//const regExp = /\.(jpg|jpeg)/gi; OU
const regExp = /\.jpe?g/gi;
// ? pode aparecer ou nao

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g

for (let arquivos of list) {
    console.log(arquivos.match(regExp2));
}
