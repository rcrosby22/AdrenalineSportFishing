
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === verifyPassword) {
      try {
        const response = await fetch('http://localhost:3001/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });
console.log(response)
        if (response.ok) {
          const data = await response.json();
          sessionStorage.setItem('accessToken', data.token)
          // setUser(data.user);
          navigate('/');
        } else {
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      console.error('Password verification failed');
    }
  };

  return (
    <div className="signin col">
      <form onSubmit={handleSubmit}>
        <TextField
          className="FormInput"
          label="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="FormInput"
          label="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="FormInput"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          className="FormInput"
          label="Verify Password"
          type="password"
          required
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" className="FormInput">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
