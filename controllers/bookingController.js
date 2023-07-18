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
  }, [])
  
  const getBookings = async () => {
    try {
      const token = sessionStorage.getItem('accessToken')
      const response = await axios.get('http://localhost:3001/bookings/', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setBookings(response.data)
    } catch (error) {
      console.error(error)
      // Handle any error that occurred during the retrieval process
    }
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
  
  const handleUpdateBooking = (id) => {
    // Retrieve the booking data that needs to be updated
    const bookingToUpdate = bookings.find((booking) => booking._id === id)
    
    // Implement your logic for updating the booking, such as opening a modal or redirecting to a form with the pre-filled data
    // You can use the bookingToUpdate object to access the specific booking details
    console.log(`Update booking with ID: ${id}`)
  }

  const handleDeleteBooking = async (id) => {
    try {
      // Send a DELETE request to your backend API to delete the booking with the provided ID
      const token = sessionStorage.getItem('accessToken')
      await axios.delete(`http://localhost:3001/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      // Update the bookings state by removing the deleted booking
      setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id))
      console.log(`Deleted booking with ID: ${id}`)
    } catch (error) {
      console.error(error)
      // Handle any error that occurred during the deletion process
    }
  }

  return (
    <div>
      <h1>We're thrilled to have you!</h1>
      <BookingForm />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Guests</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Actions</TableCell>
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
