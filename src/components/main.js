import { React, useState, useReducer } from 'react';
import Bookings from './mainComponents/bookings';
import Home from "./mainComponents/home";
import Menu from "./mainComponents/menu";
import Order from "./mainComponents/order";
import Login from "./mainComponents/login";
import { Routes, Route, useNavigate } from "react-router-dom";
import useFormAPI from './mainComponents/bookingTimeFunctions';
import ConfirmedBooking from './confirmBooking';



function Main() {

    const navigate = useNavigate();
    const {updateTimes, initializeTimes, submitForm} = useFormAPI()
    const [date, setDate] = useState('');
    const [time, setTime] = useState('--- Select a Time ---');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('BirthDay');
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, null, initializeTimes);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = e.target.data;
        const response = submitForm(formData);
        if(response) {return navigate('/confirmation')}
    }

    const bookingStates = {date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, setAvailableTimes, handleSubmit}

    return(
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/*<Route path="/about" element={<About/>} /> */}
                <Route path="/menu" element={<Menu/>} />
                <Route path="/reservations" element={<Bookings bookingStates={{...bookingStates}} />} />
                <Route path="/order" element={<Order/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/confirmation" element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    )
}


export default Main;
