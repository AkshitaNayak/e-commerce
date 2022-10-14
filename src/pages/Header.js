import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import AppContext from '../Context/AppContext/AppContext';
import { useContext } from 'react';
export default function Header(props) {
    let appContext = useContext(AppContext);

    let url = "https://fakestoreapi.com/products/categories"

    let [categories, setCategories] = useState([])
    let [loading, setLoading] = useState(true)

    async function fetchCategories() {
        let response = await fetch(url)
        let result = await response.json()
        console.log(result)
        setCategories(result)
        setLoading(false)

    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className='w-100 h-14 bg-orange-600 '>
            <header className='flex flex-wrap items-center justify-between px-2 py-3'>
                <nav className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    <div className=''>
                        <Link to="/">
                            <img src="https://seeklogo.com/images/B/blinkit-logo-568D32C8EC-seeklogo.com.png" alt="blink-it-logo"
                                className='w-10 h-10' />
                        </Link>
                    </div>

                    <div className='flex space-x-3 text-white font-bold'>
                        {/* <Link to="/category">Category</Link> */}

                        {categories.map((category) => {

                            return (
                                <div key={category}>

                                    <Link to={`category/${category}`} key={category} ><p className='capitalize'>{category}</p></Link>
                                </div>)
                        })
                        }

                        <div>
                            <svg onClick={()=>{
                                props.setOpen(true)
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span>{appContext.cartItems.length}</span>


                        </div>



                    </div>
                </nav>
            </header>
        </div>
    )
}
