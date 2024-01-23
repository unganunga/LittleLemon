import { render, screen } from '@testing-library/react';
import Bookings from './components/mainComponents/bookings';
import useFormAPI from './components/mainComponents/bookingTimeFunctions';

const { updateTimes, initializeTimes, submitForm} = useFormAPI()

test('Renders the BookingForm heading', () => {
    const date =''
    const time = '17:00'
    const guests = 1
    const occasion = 'BirthDay'
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const bookingStates = {date: date, time, guests, occasion, availableTimes};

    render(<Bookings bookingStates={{...bookingStates}}/>);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('Test the updateTimes function', () => {
  const times = updateTimes(null, '01/23/2024');
  expect(times.sort()).toEqual(['15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:30', '19:30', '22:00', '23:00', '--- Select a Time ---'].sort())
})

test('Test the initializeTimes function', () => {
  const times = initializeTimes();
  const numberOfTimes = times.length;
  expect(numberOfTimes).toBeGreaterThan(0)
})
