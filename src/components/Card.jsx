'use client'
import Image from 'next/image'
import React from 'react'
import { useProducts } from '@/context/ProductsContext'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import ModalCart from './ModalCart';

export default function Card({ product }) {
    // Obtengo las funciones para restar y aumentar la cantidad de useContext
    const { handleSum, handleRest, handleProductId, handleCart } = useProducts()


    return (
        <div className='flex flex-col justify-between items-center p-4  rounded-xl text-slate-200 shadow-sm shadow-[#585b61be] sm:w-72 md:w-96 bg-[#9ca3af16]'>
            <Image
                src={product.imagen}
                alt={`Imagen de ${product.titulo}`}
                width='250'
                height='250'
            />
            <div className='flex flex-col p-4 justify-start gap-4'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-orange-400'>{product.titulo}</h2>
                    <p className='font-bold'>${product.precio} US</p>
                    <p className='text-sm'>{product.descripcion}</p>

                </div>
                <div className='flex justify-center items-center gap-3'>
                    <span className='font-bold'>Cantidad:</span>

                    <div className='flex items-center text-center gap-1 '>
                        <button className='bg-[#585b61be]  p-1 rounded-xl' onClick={() => handleRest(product.id)}><FaArrowDown /></button>
                        <span className=' border-slate-200 w-5 text-center'>{product.cantidad}</span>
                        <button className='bg-[#585b61be] p-1 rounded-xl' onClick={() => handleSum(product.id)}><FaArrowUp /></button>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <button className='bg-orange-400 p-2 text-slate-200 rounded-md' onClick={() => handleProductId(product.id)}>Comprar Ahora</button>
                    <button className='bg-orange-50 p-2 rounded-md text-black' onClick={() => handleCart(product.id)}>Agregar al carrito</button>
                </div>
            </div>
            <ModalCart />
        </div>
    )
}
