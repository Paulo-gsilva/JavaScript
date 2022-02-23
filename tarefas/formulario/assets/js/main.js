class ValidForm{
    constructor(){
        this.forms = document.querySelector('.container-formulario');
        this.event();
    }

    event(){
        this.forms.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event){
        event.preventDefault(); //impede envio do formulario
        const validFields = this.checkValidFields();
        const validPassword = this.checkValidPassword();

        if(validFields && validPassword){
            alert('banana');
            this.forms.submit();
        }
    }

    checkValidPassword(){
        let valid = true;
        const password = this.forms.querySelector('.senha');
        const repeatPassword = this.forms.querySelector('.repetir-senha');

        if(password.value !== repeatPassword.value){
            this.createError(repeatPassword, 'Senhas Precisam Ser Iguais');

            valid = false; 
        } 

        if(password.value.length < 6 || password.value.length > 12){
            this.createError(password, 'Senha Deve Ter Entre 6 e 12 Caracteres');

            valid = false;
        }

        return valid;
    }

    checkValidFields(){
        let valid = true;

        for(let error of this.forms.querySelectorAll('.erro')){
            error.remove();
        }

        for(let fields of this.forms.querySelectorAll('.validar')){
            let label = fields.previousElementSibling.innerText; //IRMÃO ANTERIOR
            if(!fields.value){ //caso não exista nada no campo
                this.createError(fields, `O Campo "${label}" Não Pode Estar Em Branco"`);
                valid = false;
            }

            if(fields.classList.contains('cpf')){
                if(!this.validCpf(fields)) valid = false;
            }

            if(fields.classList.contains('user')){
                if(!this.validUser(fields)) valid = false;
            }
        }
        
        return valid;
    }

    validUser(field){
        const user = field.value;
        let valid = true;

        if(user.length < 3 || user.length > 12){
            this.createError(field, 'Usuário Deve Ter Entre 3 e 12 Caracteres');
            valid = false;
        }

        if(!user.match(/[a-zA-Z0-9]+/g)){
            this.createError(field, 'Usuário Não Pode Ter Caracteres Especiais');
            valid = false;
        }

        return valid;
    }

    validCpf(field){
        const cpf = new CheckCpf(field.value);
        if(!cpf.validCpf()){
            this.createError(field, 'CPF Inválido');
            return false;
        }

        return true;
    }

    createError(field, msg){
        const p = document.createElement('p');
        p.innerHTML = msg;
        p.setAttribute('class', 'erro');
        field.insertAdjacentElement('afterend', p); //adicionar e posiciona o elemento em relação a outro elemento
    }
}

const validade = new ValidForm();