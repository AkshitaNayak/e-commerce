import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Category from './pages/Category';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Error404 from './pages/Error404';
import Header from './pages/Header';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import { Toaster } from "react-hot-toast";

function App() {

  const [open,setOpen] = useState(false)

  return (
    <div className="body-wrapper">
       <Toaster position="top-right" reverseOrder={false} />
       
      <Header setOpen={setOpen}/>
      <Cart open={open} setOpen={setOpen}/>


      <Routes>
        <Route index element={<Home />}/>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header />}/>
        <Route path='/category/:id' element={<Category/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        {/* <Route path='/cart/:id' element={<Cart/>}/> */}
        <Route path='*' element={<Error404/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
