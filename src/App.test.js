import { render, screen } from '@testing-library/react';
import Bookings from './components/mainComponents/bookings';
import { initializeTimes, updateTimes } from './components/mainComponents/bookingTimeFunctions';

test('Renders the BookingForm heading', () => {
    const date =''
    const time = '17:00'
    const guests = 1
    const occasion = 'BirthDay'
    const bookingStates = {date: date, time, guests,  occasion};

    render(<Bookings bookingStates={{...bookingStates}}/>);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('Test the updateTimes function', () => {
  expect(updateTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
})

test('Test the initializeTimes function', () => {
  expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
})
