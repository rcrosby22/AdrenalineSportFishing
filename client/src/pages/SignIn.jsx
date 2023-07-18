import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [updateFormValues, setUpdateFormValues] = useState({
    email: '',
    phoneNumber: ''
  })
  const [isUpdateMode, setIsUpdateMode] = useState(false)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleUpdateChange = (e) => {
    setUpdateFormValues({
      ...updateFormValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues)
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        sessionStorage.setItem('accessToken', data.token)
        setIsUpdateMode(false)
        console.log(data.user)
      } else {
        console.error('Sign-in failed')
      }
    } catch (error) {
      console.error('Error during sign-in:', error)
    }
  }


  return (
  <div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <Typography variant="h5" component="h1">
            Sign In
          </Typography>
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!formValues.email || !formValues.password}
          >
            Sign In
          </Button>
        </form>
      
    </div>
  )
}

export default SignIn
