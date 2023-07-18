import React, { useState } from 'react'
import axios from 'axios'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FormControl, TextField } from '@mui/material'
import Button from '@mui/material/Button'

const BookingForm = () => {
  const initialState = {
    email: '',
    phoneNumber: '',
    tripDate: '',
    numberOfPeople: ''
  }

  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [date, setDate] = useState()
  const [numberOfPeople, setNumberOfPeople] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newBooking = await axios.post(
        'http://localhost:3001/bookings',
        {}
      )
      console.log(formState)
      console.log(newBooking.data)
      setFormState(initialState)
    } catch (error) {
      console.error('Error submitting booking:', error)
    }
  }

  const handleDateChange = (date) => {
    setFormState({ ...formState, tripDate: date })
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="BookingForm">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            className="FormInput"
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="FormInput"
            label="Phone Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="tripDate">Date of Trip:</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </LocalizationProvider>

          <TextField
            className="FormInput"
            label="Number of People"
            required
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
          <Button type="submit" variant="contained" className="FormInput">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

export default BookingForm
