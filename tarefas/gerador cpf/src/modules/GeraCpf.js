import CheckCpf from "./CheckCpf";

export default class GeraCpf{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    format(cpf){
        return(
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    geraNewCpf(){
        const cpf = this.rand();
        const digit1 = CheckCpf.createDigit(cpf);
        const digit2 = CheckCpf.createDigit(cpf + digit1);
        const newCpf = cpf + digit1 + digit2;
        return this.format(newCpf);
    }
}