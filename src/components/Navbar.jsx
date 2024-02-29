'use client'
import React, { useState } from 'react'
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import Link from 'next/link';

// Componente que tiene las opciones del menu para celulares
function OptionsNav ({ closeMenu }) {
 
  return (
    <div className='bg-red-400 absolute flex justify-center w-screen'>
      <ul className='flex flex-col justify-center items-center p-3'>
        <Link href='/' onClick={closeMenu}>Inicio</Link>
        <Link href='/products' onClick={closeMenu}>Productos</Link>
      </ul>
    </div>
  )
}

export default function Navbar() {
  // Estado para abrir o cerrar el menu
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav className='flex justify-between bg-red-400 p-3 items-center'>
        <Link className='font-bold' href='/'>AsPhone</Link>
        <span className='cursor-pointer' onClick={handleClick}>
          {open ? <SlMenu /> : <GrClose />}
        </span>
      </nav>
      {open ? "" : <OptionsNav closeMenu={handleClick}/>}
    </>
  )
}