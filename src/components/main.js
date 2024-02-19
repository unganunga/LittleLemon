import { React, useState, useEffect } from 'react';
import Bookings from './mainComponents/bookings';
import Home from "./mainComponents/home";
import Menu from "./mainComponents/menu";
import Order from "./mainComponents/order";
import Login from "./mainComponents/login";
import { Routes, Route, useNavigate} from "react-router-dom";
import ConfirmedBooking from './confirmBooking';
import useInitTimes from './mainComponents/useInitTimes';
import useUpdateTimes from './mainComponents/useUpdateTimes';


function Main() {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [date, setDate] = useState('');
    const [time, setTime] = useState('--- Select a Time ---');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('BirthDay');
    const [timeOptions, setTimeOptions] = useState(['--- Select a Time ---'])
    const {initTimes} = useInitTimes(setTimeOptions)
    const getTimes = useUpdateTimes(setTimeOptions);
    const [availableTimes, setAvailableTimes] = useState();

    // initialize available times for table booking form with times available for current day
    useEffect(() => {console.log(timeOptions); setAvailableTimes(timeOptions)}, [timeOptions])

    function handleSubmit(e) {
        // submit handler for table booking form

        e.preventDefault();
        const data = {
            name: name,
            date: date,
            time: time,
            occasion: occasion
        }
        console.log(data)
        fetch('http://localhost:5220/api/TableBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(r => { if(r.ok) {return navigate('/confirmation')} })
    }

    const bookingStates = {name, setName, date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, setAvailableTimes: getTimes, handleSubmit}

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
