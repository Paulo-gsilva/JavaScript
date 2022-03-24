import React from "react";
import './tarefas.css';

//TAREFAS
import { FaEdit, FaWindowClose } from 'react-icons/fa';


export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <div>
                        <FaEdit
                            onClick={(e) => handleEdit(e, index)}
                            className='edit'
                        />
                        <FaWindowClose
                            onClick={(e) => handleDelete(e, index)}
                            className='delete'
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
}