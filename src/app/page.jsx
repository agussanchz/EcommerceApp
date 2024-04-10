'use client'
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <section className="flex flex-col justify-center items-center w-screen h-[650px] p-2 text-center">
         <h2 className='text-4xl font-bold text-slate-200'>Bienviedo a </h2>
          <h1 className='text-[5.5rem] font-bold text-slate-200'>AsPhone</h1>
          <a href='#products' className='animate-twice animate-duration-1000 animate-bounce text-9xl text-orange-400'>↓</a>
        </section>
        <section id='products' className="flex flex-col justify-center items-center gap-10 p-2 text-center w-screen">
          <div> 
            <h2 className='font-bold text-7xl text-slate-200'>Conoce nuestros</h2>
            <span className='font-bold text-7xl text-orange-300'>Productos.</span>
          </div>
          <Link href={'/products'} className='font-bold bg-orange-400 rounded-md w-32 p-3 text-slate-200 hover:border hover:border-orange-400 hover:bg-transparent '>Ver mas</Link>
        </section>
      </main>
    </>
  );
}
