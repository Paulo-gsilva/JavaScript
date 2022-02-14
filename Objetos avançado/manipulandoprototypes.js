function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.aumento = function(value){
    this.price = this.price + (this.price * (value/100));
}

const p1 = new Product('Camiseta', 27.5);
p1.aumento(25)
console.log(p1);

const p2 = {
    name: 'Abacaxi',
    price: 8
}
Object.setPrototypeOf(p2, Product.prototype)

p2.aumento(356)
console.log(p2)