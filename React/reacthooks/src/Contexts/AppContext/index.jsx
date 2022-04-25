import globalState from './data'
import GlobalContext from './global';

export function AppContext({ children }) {
    return (
        <GlobalContext.Provider value={globalState}> {/*todos os componentes que estiverem dentro do GlobalContext irão receber o globalstate*/}
            {/*alterar um estado do globalstate irá refletir em todos os descendentes*/}
            {children}
        </GlobalContext.Provider>
    );
}