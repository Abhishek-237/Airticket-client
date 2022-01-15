import { useState } from "react";
import mycontext from "./globalcontext";

function Globalstate({children}){

    const [state, setState] = useState({
        Loggedin : "none",
        id : ""
    })

    return(
        <mycontext.Provider value={{state, setState}}>
            {children}
        </mycontext.Provider>
    )
}

export default Globalstate;