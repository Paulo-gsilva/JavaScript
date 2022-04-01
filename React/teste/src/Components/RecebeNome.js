import React from "react";

export default function RecebeNome({ setNome }) {
    return (
        <input
            type="text"
            placeholder="Qual seu nome?"
            onChange={(e) => setNome(e.target.value)}
        >
        </input>
    );
}