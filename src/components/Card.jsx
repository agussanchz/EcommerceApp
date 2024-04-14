'use client'
import Image from 'next/image'
import React from 'react'
import { useProducts } from '@/context/ProductsContext'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import ModalCard from './modalCard';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

export default function Card({ product }) {
    // Obtengo las funciones para restar y aumentar la cantidad de useContext
    const { handleSum, handleRest, handleProductId, handleCart, showModal, setShowModal } = useProducts()


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
            <ModalCard isOpen={showModal} onClose={() => setShowModal(false)}>
                <IoClose  onClick={()=> setShowModal(false)} className='w-8 h-10 cursor-pointer text-orange-300'/>
                <div className='flex flex-col justify-center gap-4 items-center text-white shadow-sm shadow-black bg-[#2425279a] w-96 h-60 rounded-xl'>
                    <h2 className='text-2xl'>Producto agregado al carrito.</h2>
                    <Link href={'/cart'} className='text-center  bg-orange-400 bg-opacity-75 rounded-md w-32 p-2 text-slate-200 hover:border hover:border-orange-400 hover:bg-transparent' onClick={()=> setShowModal(false)}>Ir al carrito</Link>
                </div>
            </ModalCard>
        </div>
    )
}
