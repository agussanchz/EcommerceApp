'use client'
import { useProducts } from '@/context/ProductsContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {

  const { cart } = useProducts()


  const router = useRouter()

  const handleClick = () => {
    router.push('/products/sucess')
  }

  return (
    cart.length === 0 ?
      <div className='flex flex-col justify-center gap-4 items-center'>
        <h2 className='font-bold text-7xl'>
          Su carrito esta vacio :(
        </h2>
        <Link href={'/products'} className='bg-blue-400 p-2 rounded-md'>Descubrir productos</Link>
      </div>
      :
      <div className='flex justify-between border border-black rounded-md p-4 gap-6'>
        <Image
          src={cart.productId.imagen}
          alt={`Imagen de ${cart.productId.titulo}`}
          width={200}
          height={620}
        />
        <div className='flex flex-col justify-start gap-1'>
          <h2>{cart.productId.titulo}</h2>
          <p className='font-bold'>{cart.productId.precio}</p>
          <p className='text-sm'>{cart.productId.descripcion}</p>
          <span>Cantidad:  <span>{cart.productId.cantidad}</span></span>
          <span>Total de la compra: {cart.productId.cantidad * cart.productId.precio}</span>
          <button className='bg-blue-400 p-2' onClick={() => handleClick()}>Finalizar Compra</button>
          <button className='bg-red-500 p-2'>Eliminar</button>
        </div>
      </div>
  )
}
