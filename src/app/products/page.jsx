'use client'
import React, { useState } from 'react'
import { products } from '@/api'
import Card from '@/components/Card'

export default function Products() {
    //Estado que contiene todos los productos 
    const [productsIphone, setProductsIphone] = useState(products)

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
        <>
            <div className='flex flex-col justify-center items-center gap-3 p-3'>
                {productsIphone.map((product) => (
                    <Card
                        product={{ imagen: product.imagen, titulo: product.title, precio: product.precio, descripcion: product.descripcion, cantidad: product.cantidad, id: product.id }}
                        handleRest={handleRest}
                        handleSum={handleSum}
                    />
                ))}
            </div>
        </>
    )
}
