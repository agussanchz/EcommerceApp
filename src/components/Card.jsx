'use client'
import Image from 'next/image'
import React from 'react'
import { useProducts } from '@/context/ProductsContext'


export default function Card({ product }) {
    // Obtengo las funciones para restar y aumentar la cantidad de useContext
    const { handleSum, handleRest, handleProductId, handleCart } = useProducts()


    return (
        <div className='flex flex-col justify-between items-center p-4 border border-black rounded-xl text-slate-200 sm:w-72 md:w-96 bg-[#9ca3af16]  hover:border-orange-400'>
            <Image
                src={product.imagen}
                alt={`Imagen de ${product.titulo}`}
                width='250'
                height='250'
            />
            <div className='flex flex-col p-4 justify-start gap-1'>
                <h2 className='font-bold text-orange-400'>{product.titulo}</h2>
                <p className='font-bold'>${product.precio} US</p>
                <p className='text-sm'>{product.descripcion}</p>
                <span>Cantidad:</span>
                <div className='flex justify-center items-center gap-3'>
                    <button className='border  w-8 rounded-md' onClick={() => handleRest(product.id)}>-</button>
                    <span>{product.cantidad}</span>
                    <button className='border  w-8 rounded-md' onClick={() => handleSum(product.id)}>+</button>
                </div>
                <button className='bg-orange-400 p-2 text-slate-200 rounded-md' onClick={() => handleProductId(product.id)}>Comprar Ahora</button>
                <button className='bg-orange-50 p-2 rounded-md text-black' onClick={() => handleCart(product.id)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
 