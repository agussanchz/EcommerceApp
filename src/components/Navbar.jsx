'use client'
import React, { useState } from 'react'
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';
import { useProducts } from '@/context/ProductsContext';

// Componente que tiene las opciones del menu para celulares
function OptionsNav({ closeMenu }) {

  return (
    <div className='bg-[#000]  relative flex justify-center w-screen h-screen animate-fade-down'>
      <ul className='flex flex-col font-bold text-6xl gap-5 justify-center items-center p-3 text-orange-400 '>
        <Link href='/' onClick={closeMenu}>Inicio</Link>
        <Link href='/products' onClick={closeMenu}>Productos</Link>
      </ul>
    </div>
  )
}

export default function Navbar() {
  // Estado para abrir o cerrar el menu
  const [open, setOpen] = useState(true)

  const { cart } = useProducts()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav className='flex justify-between bg-[#0a0a0a] p-6 items-center'>
        <Link className='font-bold text-orange-400 text-3xl' href='/'>AsPhone</Link>
        <div className='flex items-center gap-7'>
          <Link href={'/cart'} className='flex gap-2 items-center text-white'>
            <FaCartShopping />
            {cart.length}
          </Link>
          <span className='cursor-pointer text-white' onClick={handleClick}>
            {open ? <SlMenu /> : <GrClose />}
          </span>
        </div>
      </nav>
      {open ? "" : <OptionsNav closeMenu={handleClick} />}
    </>
  )
}