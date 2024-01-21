import { useState, useReducer } from 'react';
import React from 'react';
import Bookings from './mainComponents/bookings';
import Home from "./mainComponents/home";
import Menu from "./mainComponents/menu";
import Order from "./mainComponents/order";
import Login from "./mainComponents/login";
import { Routes, Route } from "react-router-dom";
import { initializeTimes, updateTimes } from './mainComponents/bookingTimeFunctions';



function Main() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('--- Select a Time ---');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('BirthDay');
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, null, initializeTimes);

    const bookingStates = {date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, setAvailableTimes}
    
    return(
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/*<Route path="/about" element={<About/>} /> */}
                <Route path="/menu" element={<Menu/>} />
                <Route path="/reservations" element={<Bookings bookingStates={{...bookingStates}} />} />
                <Route path="/order" element={<Order/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </main>
    )
}


export default Main;
