import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from './Context/AppContext/AppContext';
import { useContext } from 'react';
import AppState from './Context/AppContext/AppState';

export default function ProductCard(props) {
  let appContext = useContext(AppContext)

  return (
   
    <div className="w-1/4 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-600">
      <img src={props.product.image} className="h-64 mx-auto" />
      <Link to={`/product/${props.product.id}`}>
      <h3 className="roboto mt-3">{props.product.title}</h3>
      </Link>
      <div className="mt-4 flex justify-between">
        <div>
          <p>$ {props.product.price}</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={()=>{
              appContext.addProductToCart(props.product)
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          
        </div>
      </div>
    </div>
 
  );
}