import { useContext } from "react";
import GlobalContext from "../../Contexts/AppContext/global";
import { P } from "../P";

export const H1 = () => {
    const context = useContext(GlobalContext); //H1 irá capturar o valor passado para o GlobalState

    return (
        <>
            <h1>{context.title}</h1>
            <P />
        </>
    );
}