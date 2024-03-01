'use client'
import React, { useState } from 'react'
import { products } from '@/api'
import Image from 'next/image'

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
                    <>
                        <div className='flex justify-between border border-black rounded-md p-4 gap-6'>
                            <Image 
                                src={product.imagen}
                                alt={`Imagen de ${product.titulo}`}
                                width={200}
                                height={620}
                            />
                            <div className='flex flex-col justify-start gap-1'>
                                <h2>{product.titulo}</h2>
                                <p className='font-bold'>{product.precio}</p>
                                <p className='text-sm'>{product.descripcion}</p>
                                <span>Cantidad:</span>
                                <div className='flex items-center gap-3'>
                                    <button className='border p-2'onClick={() => handleRest(product.id)} >-</button>
                                    <span>{product.cantidad}</span>
                                    <button className='border p-2' onClick={() => handleSum(product.id)}>+</button>
                                </div>
                                <button className='bg-blue-400 p-2'>Comprar Ahora</button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
