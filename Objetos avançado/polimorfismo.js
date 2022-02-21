/*function Bank(agency, number, balance){
    this.agency =  agency;
    this.number = number;
    this.balance = balance;
}

Bank.prototype.withdraw = function(value){
    if(value > this.balance){
        console.log(`Saldo Insuficiente.`);
        this.seeBalance();
        return;
    }

    this.balance -= value;
    console.log(`Saque Realizado com Sucesso!`);
    this.seeBalance();
}

Bank.prototype.deposit = function(value){
    this.balance += value;
    console.log(`Depósito Realizado com Sucesso!`);
    this.seeBalance();
}

Bank.prototype.seeBalance = function(){
    console.log(`Agência/Conta: ${this.agency}/${this.number} | Saldo: ${this.balance}`);
}

function CurrentAccount(agency, number, balance, limit){
    Bank.call(this, agency, number, balance);
    this.limit = limit;
}

CurrentAccount.prototype = Object.create(Bank.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function(value){
    if(value > (this.balance + this.limit)){
        console.log(`Valor de Saque Ultrapassa o limite de ${this.limit}`);
        this.seeBalance();
    }

    this.balance -= value;
    console.log(`Saque Realizado com Sucesso!`);
    this.seeBalance();
}

function SavingAccount(agency, number, balance){
    Bank.call(this, agency, number, balance);
}

SavingAccount.prototype = Object.create(Bank.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

const conta1 = new CurrentAccount(101, 201, 400, 1000);
conta1.withdraw(500);
console.log(conta1);
console.log('');

const conta2 = new SavingAccount(110, 312, 400);
conta2.withdraw(500);
console.log(conta2); */

//FACTORY FUNCTION
const withdraw = {
    withdraw(value){
        if(value > this.balance){
            console.log(`Saldo Insuficiente`);
            return;
        }

        this.balance -= value;
        console.log(`Saque Realizado com Sucesso`);
        this.seeBalance();
    }
}

const deposit = {
    deposit(value){
        this.balance += value;
        console.log(`Depósito Realizado com Sucesso`);
        this.seeBalance();
    }
}

const seeBalance = {
    seeBalance(){
        console.log(`Agência/Conta: ${this.agency}/${this.number} | Saldo: ${this.balance}`);
    }
}

const bankPrototype = Object.assign({}, withdraw, deposit, seeBalance);
function Bank(agency, number, balance){
    return Object.create(bankPrototype, {
        agency: {value: agency},
        number: {value: number},
        balance: {value: balance, writable: true}
    });
}

const joao = Bank(112, 314, 1000);
const maria = Bank(234, 422, 4000);
joao.withdraw(200);
console.log(joao);

