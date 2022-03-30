import React, { useState } from "react";
import Luz from "./Components/Luz/Evento";
import MudarCor from "./Components/MudaCor";
import RequisicaoProps from "./Components/RequisicaoProps";

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

  const [acender, setAcender] = useState(false);

  return (
    <>
      <h1 onClick={incrementarNumero}>salve - {aumentar}</h1>
      <h2>{
        //lista.map(pessoas => <p>{pessoas.nome}</p>)
      }</h2>
      <MudarCor />
      <Luz acender={acender} setAcender={setAcender} />
      <RequisicaoProps id={1} nome='João' />
      <RequisicaoProps />
    </>
  );
}

