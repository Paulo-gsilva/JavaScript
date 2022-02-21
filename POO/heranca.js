class Ranking{
    constructor(name, sport, position){
        this.name = name;
        this.sport = sport;
        this.position = position;
    }

    seeRanking(){
        return `Name: ${this.name} | Sport: ${this.sport} | Sport: ${this.position}`
    }
}

class Egames extends Ranking{
    constructor(name, sport, position, plataform){
        super(name, sport, position);
        this.plataform = plataform;
    }
}

const vasco = new Ranking('Vasco', 'Futebol', 17);
console.log(vasco);
const lol = new Egames('T1', 'LoL', 9, 'PC');
console.log(lol);

console.log(vasco.seeRanking())
console.log(lol.seeRanking())