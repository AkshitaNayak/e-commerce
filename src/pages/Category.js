import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { useParams } from 'react-router-dom';

export default function Category() {

    let url = "https://fakestoreapi.com/products/category/"

    let {id} = useParams()

    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState(true)

    async function fetchProductsfromCategory(){
        
        let response = await fetch(url+id)
        let result = await response.json()
        console.log(result)
        setProducts(result)
        setLoading(false)
        
    }

    useEffect(()=>{
        fetchProductsfromCategory()
    },[id])

  return (
    <div>

            <div>
                {loading ? ("Fetching data..."):
                (
                    products.map((product)=>{
                        return(
                            <ProductCard key={product.id} product={product}/>
                        )
                    })
                )
}
            </div>
        
    </div>
  )
}


