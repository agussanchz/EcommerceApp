'use client'
import React from 'react'
import { useProducts } from '@/context/ProductsContext'
import Image from 'next/image'

export default function Checkout() {
  const { productId } = useProducts()


  return (
    productId.length === 0 ?
      "No ha seleccionado ningun producto"
      :
      <div className='flex justify-between border border-black rounded-md p-4 gap-6'>
        <Image
          src={productId.imagen}
          alt={`Imagen de ${productId.titulo}`}
          width={200}
          height={620}
        />
        <div className='flex flex-col justify-start gap-1'>
          <h2>{productId.titulo}</h2>
          <p className='font-bold'>{productId.precio}</p>
          <p className='text-sm'>{productId.descripcion}</p>
          <span>Cantidad:  <span>{productId.cantidad}</span></span>
          <span>Total de la compra: {productId.cantidad * productId.precio}</span>
          <button className='bg-blue-400 p-2'>Finalizar Compra</button>
        </div>
      </div>
  )
}
