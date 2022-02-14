const product = {name: 'Arroz', price: 2.75};
//const other = product; //desta forma, ambos apontam para o mesmo endereço
//const other = {...product}; //copia o objeto product, mas nao apontam para o mesmo endereço

Object.defineProperty(product, 'name',{
    writable: false,
    enumerable: true,
    configurable: true
});
console.log(Object.getOwnPropertyDescriptor(product, 'name'));

console.log(Object.keys(product)); //chaves
console.log(Object.values(product)); //valores das chaves

console.log(Object.entries(product)); //entradas dos valores
for(let [key, value] of Object.entries(product)){
    console.log(`${key}: ${value}`);
}