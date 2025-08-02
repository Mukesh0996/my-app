import { createContext, useState } from "react";
import { FIELDS } from "./fields";

export let AppContext = createContext();

export const AppContextProvider = ({children}) => {

    let [stepvalue, setStepValue] = useState(1);
    let [fields, setFieldValue] = useState(FIELDS)

    let value = {

        step: stepvalue,
        setStepValue,
        fields,
        setFieldValue
    }

    return <AppContext.Provider value={value}> 
                {children}
           </AppContext.Provider>
}