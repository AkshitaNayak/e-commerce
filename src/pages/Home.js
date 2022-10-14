import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import Header from './Header';
import { useContext } from 'react';
import AppContext from '../Context/AppContext/AppContext';

export default function Home() {

    let url = "https://fakestoreapi.com/products"

    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState(true)

    async function fetchProducts() {
        let response = await fetch(url)
        let result = await response.json()
        console.log(result)
        setProducts(result)
        setLoading(false)
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>

            {/* <Header /> */}

            <div>

                {
                    loading ? (<Loader />) :
                        (
                            <>
                                <div className='wrapper'>
                                    <ShowProducts products={products} />

                                    

                                </div>

                                

                            </>

                        )
                }
            </div>



        </>
    )
}


function Loader() {
    return (
        <>
            <img src="https://static.vecteezy.com/system/resources/previews/001/826/248/large_2x/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg" alt="Loading..."
                className="w-72 h-72 m-auto" />
        </>
    )
}
// className="flex flex-wrap justify-center items-center "

function ShowProducts(props) {
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
                
                    {props.products.map((product) => {
                        return <ProductCard product={product} key={product.id} />
                    })}
                
            </div>
        </>
    )
}