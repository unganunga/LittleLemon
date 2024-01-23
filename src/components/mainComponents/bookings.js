

function Bookings(props) {

    const times = props.bookingStates.availableTimes.map(time => {time = <option key={time}>{time}</option>; return time});

    return (
        <div>
            <div style={{backgroundColor: 'rgb(73, 94, 87)', height: '150px', display: 'flex', justifyContent: 'center'}}>
                <h1 style={{fontWeight: 'bold', color: 'rgb(237, 239, 238)'}}>Make a Reservation</h1>
            </div>
            <form className='resForm'>

                <label htmlFor="res-date">Choose date</label>
                <input type="date" name='res-date' id="res-date" onChange={e => {props.bookingStates.setDate(e.target.value); props.bookingStates.setAvailableTimes(e.target.value)}} value={props.bookingStates.date}/>

                <label htmlFor="res-time">Choose time</label>
                <select name="res-time" id="res-time" value={props.bookingStates.time} onChange={e => props.bookingStates.setTime(e.target.value)}>
                    {times}
                </select>

                <label htmlFor="guests">Number of guests</label>

                <input type="number" name='guests' value={props.bookingStates.guests} min="1" max="10" id="guests" onChange={e => props.bookingStates.setGuests(e.target.value)}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name='occasion' value={props.bookingStates.occasion} onChange={e => props.bookingStates.setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" className="button" onClick={e => props.bookingStates.handleSubmit(e)}/>
            </form>
        </div>
    )
}

export default Bookings;