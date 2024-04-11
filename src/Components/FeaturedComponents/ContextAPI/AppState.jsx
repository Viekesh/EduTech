import { useState } from "react";
import AppContext from "./AppContext";



const AppState = (prop) => {

    const [mode, setMode] = useState("light");

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
            document.body.style.backgroundColor = 'white';
        }
    }

    return (
        <>
            <AppContext.Provider value={{ mode, toggleMode }}>
                {prop.children}
            </AppContext.Provider>
        </>
    )
};



export default AppState;