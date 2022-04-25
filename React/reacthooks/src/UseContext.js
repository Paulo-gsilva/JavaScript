import './App.css';
import { Div } from './Components/Div';
import { AppContext } from './Contexts/AppContext';

function UseContextApp() {
    return (
        <AppContext>
            <Div />
        </AppContext>
    );
}

export default UseContextApp;
