const array1 = ['Paulo'];
const array2 = ['Gonçalves'];
//const array3 = array1.concat(array2);
const array3 = [...array1, 'Guilherme', ...array2, ...[1, 2, 3]]; //spread

console.log(array3);