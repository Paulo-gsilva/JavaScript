import React from "react";

export default function Lista() {
    const lista = [
        { id: 1, nome: "Ana" },
        { id: 2, nome: "Joao" },
        { id: 3, nome: "Pedro" },
    ]

    return (
        <>
            {lista.map(pessoas => //JSON.stringify(lista, null, 2)
                <p key={pessoas.id}>Id: {pessoas.id}, Nome: {pessoas.nome}</p>
            )}
        </>
    );
}