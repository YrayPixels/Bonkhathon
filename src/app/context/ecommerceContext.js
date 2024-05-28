"use client";
import React, { useState, createContext } from 'react';

export const Shopcontext = createContext(null);

export default function ShopContextProvider(props) {
    const [cartitem, setCartitem] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const contextValue = {
        cartitem,
        setCartitem,
        selectedProduct,
        setSelectedProduct
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
}
