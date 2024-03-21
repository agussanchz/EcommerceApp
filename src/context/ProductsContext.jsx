'use client'
import { createContext, useContext, useState } from "react";
import { products } from '@/api'

export const ProductsContext = createContext()

export const useProducts = () => {
    const context = useContext(ProductsContext)
    if (!context) throw new Error('useProducts no contiene datos')
    return context
}

export const ProductsProvider = ({ children }) => {
    // Estado que contiene los productos 
    const [productsIphone, setProductsIphone] = useState(products);


    //Funcion para aumentar la cantidad
    const handleSum = (id) => {
        const updatedProducts = productsIphone.map(product => {
            if (product.id === id) {
                return { ...product, cantidad: product.cantidad + 1 };
            }
            return product;
        });
        setProductsIphone(updatedProducts);
    };

    //Funcion para restar la cantidad
    const handleRest = (id) => {
        const updatedProducts = productsIphone.map(product => {
            if (product.id === id && product.cantidad > 1) {
                return { ...product, cantidad: product.cantidad - 1 };
            }
            return product;
        });
        setProductsIphone(updatedProducts);
    };

    return (
        <ProductsContext.Provider
            value={{ 
                productsIphone, 
                handleRest, 
                handleSum,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}