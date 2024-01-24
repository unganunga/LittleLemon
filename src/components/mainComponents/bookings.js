import { useState, useEffect } from "react";

function Bookings(props) {
    const [isValid, setIsValid] = useState(false);
    const [isTouchedDate, setIsTouchedDate] = useState(false);
    const [isTouchedTime, setIsTouchedTime] = useState(false);
    const [isTouchedGuests, setIsTouchedGuests] = useState(false);
    const [dateStyle, setDateStyle] = useState([{border: '1px solid'}, {marginTop: '0px', display: 'none'}]);
    const [timeStyle, setTimeStyle] = useState([{border: '1px solid'}, {marginTop: '0px', display: 'none'}]);
    const [guestStyle, setGuestStyle] = useState([{border: '1px solid'}, {marginTop: '0px', display: 'none'}]);
    const [dateError, setDateError] = useState('')

    const times = props.bookingStates.availableTimes.map(time => {time = <option key={time}>{time}</option>; return time});

    function validateForm() {
        let valid = false;
        let validTime = false;
        let validDate = false;
        let validGuests = true;


        // check date is selected and not in past
        if(isTouchedDate) {
            const currentDate = new Date().getDate();
            const selectedDate = new Date(props.bookingStates.date).getDate()
            if(selectedDate < currentDate) {
                validDate = false;
                setDateStyle([{border: 'solid red'}, {marginTop: '0px'}])
                setDateError('Booking can not be for date that has already passed')
            }
            else if(props.bookingStates.date === '') {
                validDate = false;
                setDateStyle([{border: 'solid red'}, {marginTop: '0px'}])
                setDateError('Please provide a date for your booking')
            }
            else {
                validDate = true;
                setDateStyle([{border: '1px solid black'}, {marginTop: '0px', display: 'none'}])
            }
        }

        //check time is selected
        if(isTouchedTime) {
            if(props.bookingStates.time === '--- Select a Time ---') {
                validTime = false;
                setTimeStyle([{border: 'solid red'}, {marginTop: '0px'}]);
            }
            else {
                validTime = true;
                setTimeStyle([{border: '1px solid black'}, {marginTop: '0px', display: 'none'}])
            }
        }


        //check number of guests
        if(isTouchedGuests) {
            if(props.bookingStates.guests < 1 || props.bookingStates.guests > 10) {
                validGuests = false;
                setGuestStyle([{border: 'solid red'}, {marginTop: '0px'}]);
            }
            else {
                validGuests = true;
                setGuestStyle([{border: '1px solid black'}, {marginTop: '0px', display: 'none'}])
            }
        }

        (validTime && validDate && validGuests) ? valid = true : valid = false

        setIsValid(valid);
    }


    useEffect(() => {
        validateForm()
    }, [props.bookingStates.date, isTouchedDate,
        props.bookingStates.time, isTouchedTime,
        props.bookingStates.guests, isTouchedGuests
    ])

    return (
        <div>
            <div style={{backgroundColor: 'rgb(73, 94, 87)', height: '150px', display: 'flex', justifyContent: 'center'}}>
                <h1 style={{fontWeight: 'bold', color: 'rgb(237, 239, 238)'}}>Make a Reservation</h1>
            </div>
            <form className='resForm'>

                <label htmlFor="res-date">Choose date</label>
                <input style={dateStyle[0]} type="date" name='res-date' id="res-date" onChange={e => {props.bookingStates.setDate(e.target.value); props.bookingStates.setAvailableTimes(e.target.value)}} value={props.bookingStates.date} onBlur={e => {setIsTouchedDate(true)}} />
                <div name="invalidDate" style={dateStyle[1]}>{dateError}</div>

                <label htmlFor="res-time">Choose time</label>
                <select style={timeStyle[0]} name="res-time" id="res-time" value={props.bookingStates.time} onChange={e => {props.bookingStates.setTime(e.target.value)}} onBlur={e => {setIsTouchedTime(true); validateForm()}}>
                    {times}
                </select>
                <div name='invalidTime' style={timeStyle[1]}>Please select a time for your reservation</div>

                <label htmlFor="guests">Number of guests</label>
                <input style={guestStyle[0]} type="number" name='guests' value={props.bookingStates.guests} min="1" max="10" id="guests" onChange={e => {props.bookingStates.setGuests(e.target.value); if(isTouchedGuests){validateForm()}}} onBlur={e => {setIsTouchedGuests(true); validateForm()}}/>
                <div name='invalidGuests' style={guestStyle[1]}>number of guests must be betweeen 1 and 10</div>

                <label htmlFor="occasion">Occasion</label>
                <select style={{border: '1px solid'}} id="occasion" name='occasion' value={props.bookingStates.occasion} onChange={e => props.bookingStates.setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input data-testid='submitButton' type="submit" value="Make Your reservation" className="button" onClick={e => props.bookingStates.handleSubmit(e)} disabled={!isValid}/>
            </form>
        </div>
    )
}

export default Bookings;