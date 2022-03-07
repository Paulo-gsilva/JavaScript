//funciona como export default
//apenas ele será exportado
//module.exports = () => 3 + 5;

module.exports = class Animal{
    constructor(name, talk){
        this.name = name;
        this.talk = talk;
    }

    talkAnimal = () => `${this.name} diz ${this.talk}`
}
