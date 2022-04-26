import { useReducer } from 'react';
import './App.css';

const globalState = {
    title: 'Titulo inicial',
    body: 'Body inicial',
    counter: 0
}

const reducer = (state, action) => {
    //action recebe o type
    //recebe um estado velho e retorna o novo
    // if (action.type === 'muda') {
    //     //state.title = 'mudei';
    //     return { ...state, title: 'mudei' }
    // }
    //action.type === 'muda' && (state.title = 'mudei');

    switch (action.type) {
        case 'muda':
            return { ...state, title: 'mudei' };
        case 'inverter':
            return { ...state, title: state.title.split('').reverse().join('') }
    }

    return { ...state }
}

function UseReducer() {
    //useReducer é usado para estados mais complexos (funções)
    //useReducer recebe uma função reducer e estado inicial
    //dispatch é usado para disparar ações
    const [state, dispatch] = useReducer(reducer, globalState);
    console.log(state);
    return (
        <>
            <h1>{state.title}</h1>
            <button onClick={() => dispatch({ type: 'muda' })}>Muda</button>
            <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
        </>
    );
}

export default UseReducer;
