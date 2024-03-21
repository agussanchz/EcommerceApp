'use client'
import { createContext, useContext, useState } from "react";
import { products } from '@/api'
import { useRouter } from "next/navigation";

export const ProductsContext = createContext()

export const useProducts = () => {
    const context = useContext(ProductsContext)
    if (!context) throw new Error('useProducts no contiene datos')
    return context
}

export const ProductsProvider = ({ children }) => {
    // Estado que contiene los productos 
    const [productsIphone, setProductsIphone] = useState(products);
    const [productId, setProductId] = useState([]) 

    const router = useRouter()

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

    // Funcion para obtener producto por ID
    const handleProductId = (id) => {
        const productId = productsIphone.find((product => {
            if(product.id === id){
                return product
            }
        }))
        router.push('/products/checkout')
        setProductId(productId)
    }

    return (
        <ProductsContext.Provider
            value={{ 
                productsIphone, 
                productId,
                handleRest, 
                handleSum,
                handleProductId
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}