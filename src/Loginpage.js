// src/SignupPage.js
import React, { useState } from 'react';
import axios from 'axios';


import { Container, Typography, TextField, Button, Grid, Paper, Snackbar, Alert } from '@mui/material';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState('info'); // 'info' or 'error'

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', { email, password });
      if (response.data.success) {
        setSnackbarType('info');
        setMessage('Registration successful! Check your email.');
      } else {
        setSnackbarType('error');
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSnackbarType('error');
      setMessage('An error occurred. Please try again later.');
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'background.default' }}>
        <Typography variant="h5" align="center" sx={{ color: 'primary.main' }}>
          LOGIN 
        </Typography>
        <form onSubmit={handleSignup} noValidate>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                sx={{ backgroundColor:'' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{ backgroundColor: 'background.default' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ padding: 1.5, backgroundColor: 'primary.main', '&:hover': { backgroundColor: '#1565c0' } }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarType}
          sx={{ width: '100%', backgroundColor: snackbarType === 'info' ? '#2196f3' : '#f44336' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignupPage;
