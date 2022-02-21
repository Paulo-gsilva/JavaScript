function CheckCpf(cpf){
    Object.defineProperty(this, 'cleanCpf', {
        get: function(){
            return cpf.replace(/\D+/g, ''); //\D+/g sinais 
        }
    });
}

CheckCpf.prototype.check = function(){
    if(typeof(this.cleanCpf) === 'undefined') return false;
    if(this.cleanCpf.length != 11) return false;
    if(this.isSequence()) return false;

    const parcialCpf = this.cleanCpf.slice(0, -2);
    const digit1 = this.createDigit(parcialCpf);
    const digit2 = this.createDigit(parcialCpf + digit1);

    const newCpf = parcialCpf + digit1 + digit2;
    return newCpf === this.cleanCpf;
}

CheckCpf.prototype.createDigit = function(parcialCpf){
    const arrayCpf = Array.from(parcialCpf);
    let regressive = arrayCpf.length + 1;

    const total = arrayCpf.reduce(function(acum, value){
        acum += (regressive * Number(value));
        regressive--;
        return acum;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
}

CheckCpf.prototype.isSequence = function(cleanCpf){
    const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
    return sequence === this.cleanCpf;
}

const cpf = new CheckCpf('084.410.263-60');
console.log(cpf.check() ? 'Cpf Válido' : 'Cpf Inválido');
