function createCalc(){
    return{
        display: document.querySelector('.display'),

        clearDisplay(){
            this.display.value = '';
        },

        delete(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizeCount(){
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
        },

        init(){
            this.clickButton();
        },

        clickButton(){
            document.addEventListener('click', function(event){
                const element = event.target;
                
                if(element.classList.contains('btn-num')){
                    this.buttonToDisplay(element.innerText);
                }

                if(element.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(element.classList.contains('btn-del')){
                    this.delete();
                }
                
                if(element.classList.contains('btn-equ')){
                    this.realizeCount();
                }

            }.bind(this));
        },

        buttonToDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calc = createCalc();
calc.clickButton();