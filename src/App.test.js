import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bookings from './components/mainComponents/bookings';



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



// test('Test the updateTimes function', () => {
//   const times = updateTimes(null, '01/23/2024');
//   expect(times.sort()).toEqual(['15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:30', '19:30', '22:00', '23:00', '--- Select a Time ---'].sort())
// })



// test('Test the initializeTimes function', () => {
//   const times = initializeTimes();
//   const numberOfTimes = times.length;
//   expect(numberOfTimes).toBeGreaterThan(0)
// })



test('Test form will not submit without filling any fields', () => {
  const date ='';
  const time = '17:00';
  const guests = 1;
  const occasion = 'BirthDay';
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleSubmit = jest.fn();

  const bookingStates = {date: date, time, guests, occasion, availableTimes,  handleSubmit};

  const container = render(<Bookings bookingStates={{...bookingStates}}/>);
  const submit = container.getByTestId("submitButton");
  fireEvent.click(submit);
  expect(submit).toHaveAttribute('disabled')
  expect(handleSubmit).not.toHaveBeenCalled();

})



test('Test if form will submit with correct values', async () => {
  const name = bob;
  const date ='01/25/2054';
  const time = '17:00';
  const guests = 1;
  const occasion = 'BirthDay';
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const setTime = jest.fn();
  const handleSubmit = jest.fn();

  const bookingStates = {name, date: date, time, guests, occasion, availableTimes,  handleSubmit, setTime};

  const container = render(<Bookings bookingStates={{...bookingStates}}/>);

  const dateInput = container.getByLabelText(/Choose date/);
  fireEvent.blur(dateInput);

  const timeInput = container.getByLabelText(/Choose time/);
  fireEvent.blur(timeInput);

  const submit = container.getByTestId("submitButton");
  fireEvent.click(submit);

  expect(submit).not.toHaveAttribute('disabled');
  expect(handleSubmit).toHaveBeenCalled();
})



test('Test if form will not submit with incorrect time', async () => {
  const date ='01/25/2054';
  const time = '--- Select a Time ---';
  const guests = 1;
  const occasion = 'BirthDay';
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const setTime = jest.fn();
  const handleSubmit = jest.fn();

  const bookingStates = {date: date, time, guests, occasion, availableTimes,  handleSubmit, setTime};

  const container = render(<Bookings bookingStates={{...bookingStates}}/>);

  const dateInput = container.getByLabelText(/Choose date/);
  fireEvent.blur(dateInput);

  const timeInput = container.getByLabelText(/Choose time/);
  fireEvent.blur(timeInput);

  const submit = container.getByTestId("submitButton");
  fireEvent.click(submit);

  expect(submit).toHaveAttribute('disabled');
  expect(handleSubmit).not.toHaveBeenCalled();
})



test('Test if form will not submit with incorrect date', async () => {
  const date ='01/20/2014';
  const time = '17:00';
  const guests = 1;
  const occasion = 'BirthDay';
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const setTime = jest.fn();
  const handleSubmit = jest.fn();

  const bookingStates = {date: date, time, guests, occasion, availableTimes,  handleSubmit, setTime};

  const container = render(<Bookings bookingStates={{...bookingStates}}/>);

  const dateInput = container.getByLabelText(/Choose date/);
  fireEvent.blur(dateInput);

  const timeInput = container.getByLabelText(/Choose time/);
  fireEvent.blur(timeInput);

  const submit = container.getByTestId("submitButton");
  fireEvent.click(submit);

  expect(submit).toHaveAttribute('disabled');
  expect(handleSubmit).not.toHaveBeenCalled();
})



test('Test if form will not submit with incorrect number of guests', async () => {
  const date ='01/25/2054';
  const time = '17:00';
  const guests = 0;
  const occasion = 'BirthDay';
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const setTime = jest.fn();
  const handleSubmit = jest.fn();

  const bookingStates = {date: date, time, guests, occasion, availableTimes,  handleSubmit, setTime};

  const container = render(<Bookings bookingStates={{...bookingStates}}/>);

  const dateInput = container.getByLabelText(/Choose date/);
  fireEvent.blur(dateInput);

  const timeInput = container.getByLabelText(/Choose time/);
  fireEvent.blur(timeInput);

  const guestInput = container.getByLabelText(/Number of guests/);
  fireEvent.blur(guestInput);

  const submit = container.getByTestId("submitButton");
  fireEvent.click(submit);

  expect(submit).toHaveAttribute('disabled');
  expect(handleSubmit).not.toHaveBeenCalled();
})
