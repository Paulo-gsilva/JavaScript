import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Evento from "./Components/Evento";
import Luz from "./Components/Luz/Evento";
import MudarCor from "./Components/MudaCor";
import RequisicaoProps from "./Components/RequisicaoProps";
import RecebeNome from "./Components/RecebeNome";
import MandaSalve from "./Components/MandaSalve";
import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";

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

  function mandaSalve() { //atribuindo função do pai ao filho por meio de props
    console.log(`Salve`);
  }

  const [acender, setAcender] = useState(false);

  const [nome, setNome] = useState();

  return (
    <>
      {/*
      <h1 onClick={incrementarNumero}>salve - {aumentar}</h1>
      <h2>{
        //lista.map(pessoas => <p>{pessoas.nome}</p>)
      }</h2>
      
      <MudarCor />
      <Luz acender={acender} setAcender={setAcender} />
      <RequisicaoProps id={1} nome='João' />
      <RequisicaoProps />
      <Evento mandaSalve={mandaSalve} />
      <RecebeNome setNome={setNome} />
      <MandaSalve nome={nome} />
      */}

      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <Switch> {/*o que está fora do switch nao será alterado*/}
          <Route path="/">
            <Home />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

