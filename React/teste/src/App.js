import React, { useState } from "react";
import MudarCor from "./Components/MudaCor";

export default function App() {
  const [aumentar, setAumentar] = useState(0);
  /*const lista = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Joao" },
    { id: 3, nome: "Pedro" },
  ]*/
  const incrementarNumero = () => {
    setAumentar((numero) => numero + 1);
  }

  return (
    <>
      <h1 onClick={incrementarNumero}>salve - {aumentar}</h1>
      <h2>{
        //lista.map(pessoas => <p>{pessoas.nome}</p>)
      }</h2>
      <MudarCor />
    </>
  );
}

