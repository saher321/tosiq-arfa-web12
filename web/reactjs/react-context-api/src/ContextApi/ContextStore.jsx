import React, { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({children}) => {
    const name = "Ahmad";
    const age = "20";
    const appName = "Context Application";
    return (
        <MyContext.Provider value={{name, age, appName}}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextStore