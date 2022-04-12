const cpf = `
Cpfs: 
254.434.231-64 453.644.676-88 432.534.656-30
546.356.644-60`

//const cpfRegExp = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
const cpfRegExp = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g;
console.log(cpf.match(cpfRegExp));
