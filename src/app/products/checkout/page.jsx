'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { useProducts } from '@/context/ProductsContext'
import Image from 'next/image'

export default function Checkout() {
  const { productId } = useProducts()

  const router = useRouter()

  const handleClick = () => {
    router.push('/products/sucess')
  }

  return (
    productId.length === 0 ?
      "No ha seleccionado ningun producto"
      :
      
      <section className='p-3'>
        <div className='flex flex-col justify-between items-center p-4 border border-black rounded-xl text-slate-200 sm:w-72 md:w-96 bg-[#9ca3af16]'>
          <Image
            src={productId.imagen}
            alt={`Imagen de ${productId.titulo}`}
            width={200}
            height={620}
          />
          <div className='flex flex-col p-4 justify-start gap-1'>
            <h2 className='font-bold text-orange-400'>{productId.titulo}</h2>
            <p className='font-bold'>${productId.precio} US</p>
            <p className='text-sm'>{productId.descripcion}</p>
            <span>Cantidad:  <span>{productId.cantidad}</span></span>
            <span>Total de la compra: {productId.cantidad * productId.precio}</span>
            <button className='bg-orange-400 p-2 rounded-md' onClick={() => handleClick()}>Finalizar Compra</button>
          </div>
        </div>
      </section>
  )
}
