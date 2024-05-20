"use client"
import React, { useState, createContext } from 'react';

export const Shopcontext = createContext(null);

export default function ShopContextProvider(props) {
   
    const [cartitem, setCartitem] = useState([]);

   

    const contextValue = {
        cartitem,
        setCartitem
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
}