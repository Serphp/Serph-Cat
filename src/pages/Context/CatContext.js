import { React, createContext, useState, useEffect } from 'react';


export const CatContext = createContext();

const CatContextProvider = ({ children }) => {


    return (
        <CatContext.Provider value={{}}>
            {children}
        </CatContext.Provider>
    )
}

export default CatContextProvider;