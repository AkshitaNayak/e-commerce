import React, { useState } from "react";
import toast from "react-hot-toast";
import AppContext from "./AppContext";

export default function AppState(props) {
  //initial items
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(checkLSStatus());




  let saveOrder = ((orderDetails)=>{
    console.log('Saving Order')
    console.log("Order Detail")
    toast.success('Your order is successfully')
    // toast.success(localStorage.getItem('cartItems'))
    setCartItems([])
    
  })

  

  //My code starts here for Local Storage
  let [itemToAdd, setItemToAdd] = useState("")

  function checkLSStatus() {
    if (localStorage.getItem('cartItems')) {
      return JSON.parse(localStorage.getItem('cartItems'))
    } else {
      localStorage.setItem('cartItems', JSON.stringify([]))
      return JSON.parse(localStorage.getItem('cartItems'))
    }
  }


  function saveItemsToLS(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  function getItemsFromLS() {
    setCartItems(JSON.parse(localStorage.getItem('cartItems')))
  }



  let addProductToCart = (product) => {
    let matchProduct = false;
    let i;

    for (i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        matchProduct = true;
      }
    }

    if (matchProduct) {
      toast.error("Product is already in cart");
    } else {
      setCartItems([...cartItems, product]);
      saveItemsToLS([...cartItems, product])
      getItemsFromLS()
      setItemToAdd("")
      toast.success("Product Added To Cart");
    }
  };

  let removeItemFromCart = (product) => {
    let updatedCartItems = cartItems.filter((item) => {
      return item.id !== product.id;
    })

    setCartItems(updatedCartItems);
    saveItemsToLS(updatedCartItems)
    getItemsFromLS()
    toast.success("Item deleted successfully");

  }

  return (
    <AppContext.Provider value={{
      cartItems, setCartItems,
      addProductToCart, removeItemFromCart,saveOrder

    }}>
      {props.children}
    </AppContext.Provider>
  );
}