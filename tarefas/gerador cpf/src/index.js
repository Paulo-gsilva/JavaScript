import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';

(function(){
    const gera = new GeraCpf();
    const cpf = document.querySelector('.cpf-gerado');
    cpf.innerHTML = gera.geraNewCpf();
})();
