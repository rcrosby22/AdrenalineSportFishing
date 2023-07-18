import React from 'react'
import BookingForm from '../components/BookingForm'
import {
  TableContainer,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Table,
  Button
} from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

const BookingPage = () => {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    getBookings()
    console.log(bookings)
  }, [])
  const getBookings = async () => {
    const token = sessionStorage.getItem('accessToken')
    const bookings = await axios.get('http://localhost:3001/bookings/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setBookings(bookings.data)
    return bookings.data
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    return formattedDate
  }
  const rows = [createData(bookings[0], 159, 6.0, 24, 4.0)]
  const handleUpdateBooking = (id) => {
    // Implement your logic for updating the booking with the provided ID
  }

  // const handleDeleteBooking = (id) => {
  //   // Implement your logic for deleting the booking with the provided ID
  // }
  return (
    <div>
      <h1>Were thrilled to have you!</h1>
      <BookingForm />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Guests</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow
                key={booking._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {booking.numberOfPeople}
                </TableCell>
                <TableCell align="right">{booking.email}</TableCell>
                <TableCell align="right">{formatDate(booking.date)}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdateBooking(booking._id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteBooking(booking._id)}
                  >
                    Delete
                  </Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BookingPage
