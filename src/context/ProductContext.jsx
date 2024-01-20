import React, { useState } from 'react'
import { createContext } from "react";

const ProductContext = createContext();

function ProductContextProvider({ children }) {

    const [cartItemList, setCartItemList] = useState([]);

    const [searchText, setSearchText] = useState('');

    let addItemToCart = (item) => {
        setCartItemList((prev) => [...prev, item])
    }

    let getCartItemCount = () => {
        return cartItemList.length;
    }

    let updateSearchText = (text) => {
        setSearchText(text)
    }

    return (
        <ProductContext.Provider value={{ addItemToCart, getCartItemCount, cartItemList, searchText, updateSearchText }}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductContextProvider }