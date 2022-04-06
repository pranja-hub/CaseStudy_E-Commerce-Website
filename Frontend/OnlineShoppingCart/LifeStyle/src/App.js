import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Shop from './Component/Shop';
import Login from './Component/Login'
import Cart from './Component/Cart'
import NewCart from './Component/api/NewCart';
import Registration from "./Component/Registration"
import Passreset from "./Component/Passreset"
import Product from './Component/api/Product';
// import Payment from './Component/Payment';
import FakeProduct from './Component/FakeProduct';
import NewPayment from './Component/api/NewPayment';
import AddProduct from './Component/api/AddProduct';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/shop" element={<Shop />} />
                <Route path='/product' element={<Product/>} />
                <Route path="/" element={<Login />} />
                <Route path="/cart" element={<Cart />}/>
                <Route path="/register" element={<Registration />} />
                <Route path="/reset" element={<Passreset />}/>
                <Route path='/product' element={<Product />} />
                <Route path='/sales' element={<FakeProduct/>} />
                <Route path='/ccart' element={<NewCart/>} />
                <Route path='/payment' element={<NewPayment/>} />
                <Route path='/add' element={<AddProduct/>} />

                {/* <Route path='/payment' element={<Payment />} /> */}
                {/* <Route path='/all' element={<AllProduct/>} /> */}
                {/* <Route path='/service' element={<Service />} /> */}
            </Routes>
        </>
    )
}

export default App
