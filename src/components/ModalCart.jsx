'use client'
import { useProducts } from '@/context/ProductsContext'

export default function ModalCart() {
    const { showModal, setShowModal } = useProducts()
    
    return (
        showModal === true ? (
            <div className='fixed inset-0 flex justify-center items-center bg-[#22232416]'>
                <div className='w-96 h-80 p-3 flex flex-col gap-4 justify-center items-center  bg-[#0101016d] rounded-2xl'>
                    <h2 className='text-5xl font-bold'>Producto agregado al carrito</h2>
                    <button className='font-bold bg-orange-400 rounded-md w-32 p-3 text-slate-200 hover:border hover:border-orange-400 hover:bg-transparent ' onClick={() => setShowModal(false)}>Cerrar</button>
                </div>
            </div>
        ) : ""
    )
}
