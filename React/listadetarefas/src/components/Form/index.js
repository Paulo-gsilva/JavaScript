import React from "react";
import './Form.css'
//FORM
import { FaPlus } from 'react-icons/fa';


//trocando THIS. por PROPS. para se adaptar aos componentes
export default function Form({ handleSubmit, handleChange, novaTarefa }) {
    return (
        <form action='#' className='form' onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type='text'
                placeholder='O que temos pra hoje?'
                value={novaTarefa}>
            </input>
            <button type='submit'>
                <FaPlus />
            </button>
        </form>
    );
}