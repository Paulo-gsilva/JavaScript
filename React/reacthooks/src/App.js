import React, { useCallback, useState } from 'react';
import './App.css';

//react.memo verifica se isso mudou ou não
const Button = ({ incrementButton }) => {
  console.log('Filho renderizado');
  return <button onClick={() => incrementButton(10)}>C1</button>
};

function App() {
  const [counter, setCounter] = useState(0);

  //toda vez que a página é renderizada essa função é criada novamente
  //em funções mais complexas é recomendado o uso de useCallBack
  //não tem sentido renderizar novamente algo que não muda

  //useCallBack salva a função, apenas será recriado se o dependente alterar []
  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num); //callback
  }, []);

  // const incrementButton = (num) => {
  //   setCounter(counter + num);
  // }

  console.log('Pai renderizado');

  return (
    <div className="App">
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div >
  );
}

export default App;
