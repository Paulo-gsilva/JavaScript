import { useContext } from "react";
import GlobalContext from "../../Contexts/AppContext/global";

export const P = () => {
    const context = useContext(GlobalContext);
    return (
        <p>{context.subtitle}</p>
    );
}