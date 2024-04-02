import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col justify-center gap-4 items-center'>
        <h2 className='font-bold text-7xl'> 
            Su carrito esta vacio :(
        </h2>
        <Link href={'/products'} className='bg-blue-400 p-2 rounded-md'>Descubrir productos</Link>            
    </div>

  )
}
