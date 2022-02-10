function Calc(){
    this.display = document.querySelector('.display');

    this.buttonToDisplay = element => this.display.value += element.innerText;

    this.clearDisplay = () => this.display.value = '';

    this.deleteValue = () => this.display.value = this.display.value.slice(0, -1);

    this.count = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('Operação inválida');
                return;
            }
            this.display.value = String(conta);
        }catch(e){
            alert('Operação inválida');
            return;
        }
    };

    this.clickButton = () => {
        document.addEventListener('click', event => {
        const element = event.target;

        if(element.classList.contains('btn-num')) this.buttonToDisplay(element);
        if(element.classList.contains('btn-clear')) this.clearDisplay();
        if(element.classList.contains('btn-del')) this.deleteValue();
        if(element.classList.contains('btn-equ')) this.count();

        });
    };

    this.init = () => {
        this.clickButton();
    };
}

const calculadora = new Calc();
calculadora.init();