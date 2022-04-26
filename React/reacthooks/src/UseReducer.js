import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
    //recebe um estado velho e retorna o novo
    return { ...state }
}

function UseReducer() {
    //useReducer recebe uma função reducer e estado inicial
    const [] = useReducer();
    return (
        <h1>Salve</h1>
    );
}

export default UseReducer;
