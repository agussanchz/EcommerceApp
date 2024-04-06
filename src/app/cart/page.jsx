'use client'
import { useProducts } from '@/context/ProductsContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
  const { cart, handleDelete } = useProducts()
  const router = useRouter()

  const handleClick = () => {
    router.push('/products/success')
  }

  return (
    <div className='flex flex-col justify-center gap-4 items-center'>
      {cart.length === 0 ? (
        <>
          <h2 className='font-bold text-7xl'>
            Su carrito está vacío :(
          </h2>
          <Link href={'/products'} className='bg-blue-400 p-2 rounded-md'>
            Descubrir productos
          </Link>
        </>
      ) : (
        cart.map((prod, index) => (
          <div key={index} className='flex justify-between border border-black rounded-md p-4 gap-6'>
            <Image
              src={prod.imagen}
              alt={`Imagen de ${prod.titulo}`}
              width={200}
              height={620}
            />
            <div className='flex flex-col justify-start gap-1'>
              <h2>{prod.titulo}</h2>
              <p className='font-bold'>{prod.precio}</p>
              <p className='text-sm'>{prod.descripcion}</p>
              <span>Cantidad: <span>{prod.cantidad}</span></span>
              <span>Total de la compra: {prod.cantidad * prod.precio}</span>
              <button className='bg-blue-400 p-2' onClick={() => handleClick()}>Finalizar Compra</button>
              <button className='bg-red-500 p-2' onClick={() => handleDelete(prod.id)}>Eliminar</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}


// cart.map((prod) => (
//   <div className='flex justify-between border border-black rounded-md p-4 gap-6'>
//   <Image
//     src={prod.imagen}
//     alt={`Imagen de ${prod.titulo}`}
//     width={200}
//     height={620}
//   />
//   <div className='flex flex-col justify-start gap-1'>
//     <h2>{prod.titulo}</h2>
//     <p className='font-bold'>{prod.precio}</p>
//     <p className='text-sm'>{prod.descripcion}</p>
//     <span>Cantidad:  <span>{prod.cantidad}</span></span>
//     <span>Total de la compra: {prod.cantidad * prod.precio}</span>
//     <button className='bg-blue-400 p-2' onClick={() => handleClick()}>Finalizar Compra</button>
//     <button className='bg-red-500 p-2'>Eliminar</button>
//   </div>
// </div>