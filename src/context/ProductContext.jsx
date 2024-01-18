import { createContext, useState } from "react";

const ProductContext = createContext();


import React from 'react'

function ProductContextProvider({ children }) {

    const [productDetailsList, setProductDetailsList] = useState([])

    let addProductToTheList = (product) => {
        setProductDetailsList((prev) => [...prev, product])
    }
    let cartItemCount = () => {
        return productDetailsList.length
    }

    let removeProductFromListById = (id) => {
        setProductDetailsList(productDetailsList.filter((item) => {
            return !(item.id === id)
        }))
    }

    return (
        <ProductContext.Provider value={{ addProductToTheList, productDetailsList, cartItemCount, removeProductFromListById }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductContextProvider }