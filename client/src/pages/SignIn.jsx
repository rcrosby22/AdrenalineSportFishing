import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ email: '', password: '' });
    setUser(payload);
    navigate('/');
  };

  return (
    <div className="signin-container">
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
  );
};

export default SignIn;
