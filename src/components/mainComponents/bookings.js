import { useState } from 'react';


function Bookings() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('BirthDay');
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

    return (
        <div>
            <div style={{backgroundColor: 'rgb(73, 94, 87)', height: '150px', display: 'flex', justifyContent: 'center'}}>
                <h1 style={{fontWeight: 'bold', color: 'rgb(237, 239, 238)'}}>Make a Reservation</h1>
            </div>
            <form className='resForm'>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" name='res-date' id="res-date" onChange={e => setDate(e.target.value)} value={date}/>
                <label htmlFor="res-time">Choose time</label>
                <select name="res-time" id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" name='guests' value={guests} min="1" max="10" id="guests" onChange={e => setGuests(e.target.value)}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name='occasion' value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" className="button"/>
            </form>
        </div>
    )
}

export default Bookings;