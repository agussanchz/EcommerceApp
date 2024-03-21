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
    const products = [
        {
            id: 1,
            titulo: "iPhone 11",
            imagen: "/iphone11.png",
            descripcion: "iPhone con chip A13 Bionic, sistema de cámara dual de 12 MP, pantalla Liquid Retina HD de 6.1 pulgadas.",
            precio: 699.99,
            stock: 20,
            cantidad: 1
        },
        {
            id: 2,
            titulo: "iPhone 12",
            imagen: "/iphone12.jpg",
            descripcion: "iPhone con diseño clásico y chip A14 Bionic, sistema de cámara dual avanzado y pantalla Super Retina XDR.",
            precio: 799.99,
            stock: 15,
            cantidad: 1
        },
        {
            id: 3,
            titulo: "iPhone 13",
            imagen: "/iphone13.jpg",
            descripcion: "El último modelo de iPhone con pantalla Super Retina XDR, chip A15 Bionic y sistema de cámara dual avanzado.",
            precio: 999.99,
            stock: 25,
            cantidad: 1
        },
        {
            id: 4,
            titulo: "iPhone 14",
            imagen: "/iphone14.jpg",
            descripcion: "iPhone con chip A16 Bionic, sistema de cámara triple de 16 MP, pantalla OLED de 6.7 pulgadas.",
            precio: 1199.99,
            stock: 18,
            cantidad: 1
        },
        {
            id: 5,
            titulo: "iPhone 15",
            imagen: "/iphone15.png",
            descripcion: "iPhone con diseño futurista, chip A17 Bionic, sistema de cámara cuádruple y pantalla holográfica.",
            precio: 1399.99,
            stock: 22,
            cantidad: 1
        }
    ];

    return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
}