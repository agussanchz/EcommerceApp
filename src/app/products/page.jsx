'use client'
import { useProducts } from '@/context/ProductsContext'
import React from 'react'
import Card from '@/components/Card'

export default function Products() {
    // Me traigo los productos del useContext
    const { productsIphone } = useProducts()

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-3 p-3'>
                {productsIphone.map((product) => (
                    <Card 
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </>
    )
}
