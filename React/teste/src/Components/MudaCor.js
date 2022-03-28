import React, { useState } from "react";

export default function MudarCor() {
    const [cor, setCor] = useState(1);
    const alterarCor = () => {
        setCor((numeroCor) => numeroCor + 1);
    }
    const estilo = {
        background: `#0${cor}f`
    }

    return (
        <h1 style={estilo} onClick={alterarCor}>Salve</h1>
    );
}