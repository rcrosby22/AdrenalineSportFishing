import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormControl } from '@mui/material'
import axios from 'axios'

const Register = ({ setUser }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(password,verifyPassword)
    if (password === verifyPassword){
     await axios.post('http://localhost:3001/auth/register', {name, email, password})
     navigate('/')
      

    }
  }

  return (
    <div className="signin col">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            className="FormInput"
            label="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="FormInput"
            label="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className="FormInput"
            label="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="FormInput"
            label="VerifyPassword"
            type="password"
            required
            onChange={(e) => setVerifyPassword(e.target.value)}
          />

          <Button type="submit" variant="contained" className="FormInput">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

export default Register
