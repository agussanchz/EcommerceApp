'use client'
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <section id='products' className="flex flex-col justify-center items-center gap-10 bg-black text-center w-screen h-screen relative">
        <video src="/xlarge.mp4" className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted playsInline></video>
          <div className="relative z-10 flex flex-col justify-center items-center gap-4">
            <h2 className='font-bold text-7xl text-slate-200'>Conoce nuestros</h2>
            <span className='font-bold text-7xl text-orange-300'>Productos.</span>
            <Link href={'/products'} className='font-bold bg-orange-400 rounded-md w-32 p-3 text-slate-200 hover:border hover:border-orange-400 hover:bg-transparent '>Ver mas</Link>
          </div>
        </section>
      </main>
    </>
  );
}
