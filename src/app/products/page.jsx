'use client'
import React, { useState } from 'react'
import { products } from '@/api'
import Image from 'next/image'

export default function Products() {
    const [valueInput, setValueInput] = useState(1)
    const productsIphone = products

    const handleSum = () => {
        setValueInput(valueInput + 1)
    }

    const handleRest = () => {
        if (valueInput !== 1) {
            setValueInput(valueInput - 1)
        }
    }

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
                                    <button className='border p-2' onClick={handleRest}>-</button>
                                    <input
                                        type="string"
                                        className='border p-2 w-12 text-center'
                                        value={valueInput}
                                    />
                                    <button className='border p-2' onClick={handleSum}>+</button>
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
