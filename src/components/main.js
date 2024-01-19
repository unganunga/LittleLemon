import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from 'react';
import Home from "./mainComponents/home";
import Menu from "./mainComponents/menu";
import Bookings from "./mainComponents/bookings";
import Order from "./mainComponents/order";
import Login from "./mainComponents/login";


function Main() {

    

    return(
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/*<Route path="/about" element={<About/>} /> */}
                <Route path="/menu" element={<Menu/>} />
                <Route path="/reservations" element={<Bookings/>} />
                <Route path="/order" element={<Order/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </main>
    )
}


export default Main;