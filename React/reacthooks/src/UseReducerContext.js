import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

const globalState = {
    title: 'Titulo inicial',
    body: 'Body inicial',
    counter: 0
}

const actions = {
    CHANGE_TITLE: 'CHANGE_TITLE',
}

function reducer(state, action) {
    switch (action.type) {
        case actions.CHANGE_TITLE: {
            return { ...state, title: action.payload }
        }
    }
    return { ...state }
}

const Context = createContext();
const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    const changeTitle = (payload) => {
        dispatch({ type: actions.CHANGE_TITLE, payload })
    }

    return (
        <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>
    )
}

const H1 = () => {
    const context = useContext(Context);
    const inputRef = useRef();

    return (
        <>
            <h1>{context.state.title}</h1>
            <input type="text" ref={inputRef}></input>
            <button onClick={() => context.changeTitle(inputRef.current.value)}>Click</button>
        </>
    )
}


function UseReducerContext() {
    return (
        <AppContext>
            <H1 />
        </AppContext>
    );
}

export default UseReducerContext;
