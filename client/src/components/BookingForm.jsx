import React, { useState } from 'react';
import axios from 'axios';
import { DatePicker } from '@gsebdev/react-simple-datepicker';

const BookingForm = () => {
  const initialState = {
    email: '',
    phoneNumber: '',
    tripDate: '',
    numberOfPeople: '',
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBooking = await axios.post('http://localhost:3001/bookingPage', formState);
      console.log(newBooking.data);
      setFormState(initialState);
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  const handleDateChange = (date) => {
    setFormState({ ...formState, tripDate: date });
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        onChange={handleChange}
        value={formState.email}
        required
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        onChange={handleChange}
        value={formState.phoneNumber}
        required
      />
      <label htmlFor="tripDate">Date of Trip:</label>
      <DatePicker
        id="tripDate"
        onChange={handleDateChange}
        value={formState.tripDate}
      />
      <label htmlFor="numberOfPeople">Number of People:</label>
      <input
        type="number"
        id="numberOfPeople"
        onChange={handleChange}
        value={formState.numberOfPeople}
        required
      />
      <button type="submit">Book Now!</button>
    </form>
  );
};

export default BookingForm;
