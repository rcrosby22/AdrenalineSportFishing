import React from "react"
import { TextField, Button } from "@mui/material"
import { useState, useEffect } from "react"

const UpdateUser =() => {
const [email, setEmail]=useState('')
const [phoneNumber, setPhoneNumber]=useState('')

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = sessionStorage.getItem('accessToken')
      const response = await fetch('http://localhost:3001/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify("")
      })

      
    } catch (error) {
      console.error('Error during user update:', error)
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/auth/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          })

          if (response.ok) {
            // const data = await response.json()
            console.log(data.user)
            // setUser(data.user)
            setIsUpdateMode(true)
          } else {
            console.error('Token verification failed')
          }
        } catch (error) {
          console.error('Error during token verification:', error)
        }
      }

      fetchData()
    }
  }, [])
  return(
     <div>
         <form className="update-form" onSubmit={handleUpdateSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
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