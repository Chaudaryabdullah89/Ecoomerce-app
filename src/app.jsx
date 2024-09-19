import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Cart from './Pages/cart';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Order from './Pages/order';
import PlaceOrder from './Pages/PlaceOrder';
import Product from './Pages/Product';
import Register from './Pages/register';

const App = () => {
  return (
    <div className='px-4 sm:px-6 md:px[10vw] lg:px-[15vw] xl:px-[20vw] '>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/order' element={<Order />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;