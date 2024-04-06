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
    const [filteredProducts, setFilteredProducts] = useState([])
    const [productId, setProductId] = useState([])
    const [cart, setCart] = useState([])

    const router = useRouter()

    //Funcion para aumentar la cantidad
    const handleSum = (id) => {
        const updatedProducts = filteredProducts.map(product => {
            if (product.id === id) {
                return { ...product, cantidad: product.cantidad + 1 };
            }
            return product;
        });
        setFilteredProducts(updatedProducts);
    };

    //Funcion para restar la cantidad
    const handleRest = (id) => {
        const updatedProducts = filteredProducts.map(product => {
            if (product.id === id && product.cantidad > 1) {
                return { ...product, cantidad: product.cantidad - 1 };
            }
            return product;
        });
        setFilteredProducts(updatedProducts);
    };

    // Funcion para obtener producto por ID
    const handleProductId = (id) => {
        const productId = filteredProducts.find((product => {
            if (product.id === id) {
                return product
            }
        }))
        router.push('/products/checkout')
        setProductId(productId)
    }

    // Funcion para obtener producto por ID y agregar al carrito
    const handleCart = (id) => {
        const productId = filteredProducts.find((product => {
            if (product.id === id) {
                return product
            }
        }))
        setCart([productId])
        alert("Producto agregado al carrito")
    }

    // Funcion para eliminar del carrito 
    const handleDelete = (id) => {
        const productId = cart.filter((product => {
            const result = product.id !== id
            return result
        }))
        setCart(productId)
    }


    return (
        <ProductsContext.Provider
            value={{
                productsIphone,
                productId,
                filteredProducts,
                cart,
                handleRest,
                handleSum,
                handleProductId,
                setFilteredProducts,
                handleCart,
                handleDelete
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}