import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import AppContext from '../Context/AppContext/AppContext';
// import AppState from '../Context/AppContext/AppState';
import { useContext } from 'react';
export default function SingleProduct(props) {

    let appContext = useContext(AppContext)

    let { id } = useParams()
    let url = "https://fakestoreapi.com/products/"

    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState(true)



    async function fetchProducts() {
        let response = await fetch(`${url}` + id)
        let result = await response.json()
        console.log(result)
        setProducts(result)
        setLoading(false)
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            {
                loading ? (<Loader />) :

                    (
                        <>
                            <div className='w ml-10  text-center pt-50 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-600'>

                                <div className=" mt-1 flex text-center space-x-14 space-y-40">
                                    <div>
                                    <img src={products.image} className='h-30 mt-30' />
                                    <h1>{products.title}</h1>
                                    </div>
                                    <div className='text-center w-1/2'>
                                    <h3>{products.description}</h3>
                                    <p>${products.price}</p>
                                    <p>Rating: {products.rating.rate} / 5</p>
                                    <p>Pieces left: {products.rating.count}</p>
                                    {/* <Link to={`/cart/${id}`}> */}
                                    <button className='bg-blue-600 text-white px-4 py-2 rounded-sm' 
                                    onClick={()=>{
                                        appContext.addProductToCart(products)
                                      }}
                                      >Add To Cart</button>
                                    {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </>


                    )
            }


        </div>
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

