import React from 'react'
import { TextField, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateUser = () => {
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = sessionStorage.getItem('accessToken')
      const response = await axios.put(
        'http://localhost:3001/user/update',
        { phoneNumber, email },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error('Error during user update:', error)
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
      const fetchData = async () => {
        try {
          const token = sessionStorage.getItem('accessToken')
          const response = await axios.get('http://localhost:3001/user', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          })
          setEmail(response.data.email)
          setPhoneNumber(response.data.phoneNumber ?? '')

          console.log(response)
        } catch (error) {
          console.error('Error during token verification:', error)
        }
      }

      fetchData()
    }
  }, [])
  return (
    <div>
      <form className="update-form" onSubmit={handleUpdateSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    </div>
  )
}
export default UpdateUser
