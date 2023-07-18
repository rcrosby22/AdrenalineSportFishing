import React from 'react'
import BookingForm from '../components/BookingForm'
import {
  TableContainer,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Table
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
    const token = sessionStorage.getItem("accessToken")
    const bookings = await axios.get('http://localhost:3001/bookings/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setBookings(bookings.data)
    return bookings.data
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData(bookings[0], 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ]
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
                <TableCell align="right">{booking.date}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BookingPage
