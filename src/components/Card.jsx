'use client'
import Image from 'next/image'
import React from 'react'
import { useProducts } from '@/context/ProductsContext'


export default function Card({ product }) {
    // Obtengo las funciones para restar y aumentar la cantidad de useContext
    const { handleSum, handleRest, handleProductId, handleCart } = useProducts()


    return (
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
                    <button className='border p-2' onClick={() => handleRest(product.id)}>-</button>
                    <span>{product.cantidad}</span>
                    <button className='border p-2' onClick={() => handleSum(product.id)}>+</button>
                </div>
                <button className='bg-blue-400 p-2 rounded-md' onClick={() => handleProductId(product.id)}>Comprar Ahora</button>
                <button className='bg-blue-200 p-2 rounded-md' onClick={() => handleCart(product.id)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
