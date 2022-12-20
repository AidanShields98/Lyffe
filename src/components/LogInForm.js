import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = ({ handleClose }) => {

  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    handleClose();
  };

  return (
    <form 
    style={{ width: '300px' }}
    onSubmit={handleSubmit}
    >
      <TextField
      sx={{
        display: 'flex',
        margin: '3%'}}
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
      sx={{
        display: 'flex',
        margin: '3%'}}
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div
      style={{ display: "flex", justifyContent:"space-evenly" }}
       >
        <Button 
        sx={{
            margin: '5%',
        }}
        variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button
         sx={{
            margin: '5%',
        }}
         type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;