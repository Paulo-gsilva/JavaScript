export default class CheckCpf{
    constructor(cpf){
        CheckCpf.validCpfType(cpf);
        this.cleanCpf = cpf.replace(/\D+/g, ''); //\D+/g sinais );
        CheckCpf.validCpfLength(this.cleanCpf);
        this.trimCpf = this.cleanCpf.slice(0, -2);
    }

    //FUNÇÕES QUE NÃO POSSUEM 'THIS' PODEM SER STATIC
    static validCpfType(cpf){
        if(typeof(cpf) !== 'string') return;
    }

    static validCpfLength(cleanCpf){
        if(cleanCpf.length != 11) return;
    }

    validCpf(){
        const digit1 = CheckCpf.createDigit(this.trimCpf);
        const digit2 = CheckCpf.createDigit(this.trimCpf + digit1);

        const newCpf = this.trimCpf + digit1 + digit2;
        return newCpf === this.cleanCpf;
    }

    static createDigit(trimCpf){
        const arrayCpf = Array.from(trimCpf);
        let regressive = arrayCpf.length + 1;
        
        const reduceArray = arrayCpf.reduce(function(acum, value){
            acum += (regressive * Number(value));
            regressive--;
            return acum;
        }, 0);

        const digit = 11 - (reduceArray % 11);
        return digit > 9 ? '0' : String(digit);
    }
}
