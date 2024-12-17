import { useState } from "react"
import UiContext from "./UiContext";




const UiContextProvider = () => {
    const [mode,setMode] = useState([]);
 <UiContext.Provider value={mode}>
    {children}
 </UiContext.Provider>

}

export default UiContextProvider;