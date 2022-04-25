import { createContext, useContext } from 'react';
import './App.css';

const globalState = {
    title: 'titulo do contexto',
    subtitle: 'subtitulo do contexto',
    counter: 0
}

const GlobalContext = createContext();

const Div = () => {
    return (
        <H1 />
    );
}

const H1 = () => {
    const context = useContext(GlobalContext); //H1 irá capturar o valor passado para o GlobalState
    return (
        <>
            <h1>{context.title}</h1>
            <P />
        </>
    );
}

const P = () => {
    const context = useContext(GlobalContext);
    return (
        <p>{context.subtitle}</p>
    );
}


function UseContextApp() {
    return (
        <GlobalContext.Provider value={globalState}> {/*todos os componentes que estiverem dentro do GlobalContext irão receber o globalstate*/}
            {/*alterar um estado do globalstate irá refletir em todos os descendentes*/}
            <Div />
        </GlobalContext.Provider>
    );
}

export default UseContextApp;
