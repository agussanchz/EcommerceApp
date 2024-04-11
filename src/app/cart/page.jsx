'use client'
import { useProducts } from '@/context/ProductsContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
  const { cart, handleDelete, setCart } = useProducts()
  const router = useRouter()

  const handleClick = () => {
    setTimeout(() => {
      setCart([])
    },1000);
    
    router.push('/products/sucess')
  }

  return (
    <div className='flex flex-col justify-center  p-4 gap-4 items-center'>
      {cart.length === 0 ? (
        <>
        <div className='flex flex-col justify-center gap-12 items-center h-screen'>
          <h2 className='font-bold text-8xl text-slate-200 '>
            Su carrito está vacío <span className='text-orange-400'>:(</span>
          </h2>
          <Link href={'/products'} className='font-bold bg-orange-400 rounded-md  p-3 text-slate-200 hover:border hover:border-orange-400 hover:bg-transparent'>
            Descubrir productos
          </Link>
        </div>
        </>
      ) : (
        cart.map((prod, index) => (
          <div key={index} className='flex flex-col justify-between items-center p-4 border border-black rounded-xl text-slate-200 sm:w-72 md:w-96 bg-[#9ca3af16]'>
            <Image
              src={prod.imagen}
              alt={`Imagen de ${prod.titulo}`}
              width={200}
              height={620}
            />
            <div className='flex flex-col justify-start gap-1'>
              <h2 className='text-orange-400 font-bold'>{prod.titulo}</h2>
              <p className='font-bold'>${prod.precio} US</p>
              <p className='text-sm'>{prod.descripcion}</p>
              <span>Cantidad: <span>{prod.cantidad}</span></span>
              <span>Total de la compra: ${prod.cantidad * prod.precio}</span>
              <button className='bg-orange-400 p-2 rounded-md' onClick={handleClick}>Finalizar Compra</button>
              <button className='bg-orange-50 p-2 text-black rounded-md' onClick={() => handleDelete(prod.id)}>Eliminar</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
