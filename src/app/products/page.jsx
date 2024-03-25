'use client'
import { useProducts } from '@/context/ProductsContext'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'

export default function Products() {
    // Me traigo los productos del useContext
    const { productsIphone, filteredProducts, setFilteredProducts } = useProducts()

    // Estados para manejar la busqueda
    const [search, setSearch] = useState('')

    // Funcion que maneja la busqueda
    const handleChange = (e) => {
        setSearch(e.target.value)
        if (search.length > 2) {
            const filterValues = productsIphone.filter((prod) => {
                const productCategory = prod.categoria.toLowerCase()
                const q = e.target.value.toLowerCase()
                if (productCategory.includes(q)) {
                    return true
                }
                return false
            })
            setFilteredProducts(filterValues)
        }

        if (search.length === 2) {
            setFilteredProducts(productsIphone)
        }
        console.log(search.length)
    }


    // UseEffect que me renderiza primero todos los productos
    useEffect(() => {
        setFilteredProducts(productsIphone)
    }, [])

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-3 p-3'>
                <input
                    type="text"
                    className='border border-black rounded-md p-2 outline-none'
                    placeholder='Teclados, mouse, celulares..'
                    value={search}
                    onChange={handleChange}
                />

                {filteredProducts.map((product) => (
                    <Card
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </>
    )
}
