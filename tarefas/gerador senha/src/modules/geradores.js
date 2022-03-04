const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '.,;^~[]{}!@#$%&*()_=-'
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraPassword(qua, mai, min, num, sim){
    const senhaArray = [];
    qua = Number(qua);

    for(let i = 0 ; i < qua ; i++){
        mai && senhaArray.push(geraMaiuscula());
        min && senhaArray.push(geraMinuscula());
        num && senhaArray.push(geraNumero());
        sim && senhaArray.push(geraSimbolos());
    }

    const embaralha = senhaArray.sort(() => 0.5 - Math.random());
    return embaralha.join('').slice(0, qua);
}
