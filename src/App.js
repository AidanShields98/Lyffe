import React from 'react';
import BottomNavigation from './components/BottomNavigation';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import SignUpDialog from './components/SignUpDialog';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogInDialog from './components/LoginDialog'
import { Routes, Route } from 'react-router-dom';
import './App.css';

import {Home} from './pages/Home';
import Exercises from './pages/Exercises';
import {Workout} from './pages/Workout';
import {User} from './pages/User';

function App() {

  const [signup, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);


  const handleOpen = () => {
    setSignUp(true);
  };

  const handleClose = () => {
    setSignUp(false);
  };

  const handleOpenLogin = () => {
    setLogin(true);
  };

  const handleCloseLogin = () => {
    setLogin(false);
  };


  return (
    <div>
      <AppBar sx={{ height: '51px', textAlign: 'center', xs: 'none', md: 'flex'}}>
        <Toolbar> 
           <Button sx={{  width: '10%', color:'white', fontSize: '2vh', marginBottom:'.5%'  }} onClick={handleOpen}>Signup</Button>
           <Typography  component="div" sx={{ flexGrow: 1, textAlign: 'center', fontSize: '4vh', marginBottom:' .5%' }}>
            Lyffe
          </Typography>
          <Button sx={{  width: '10%', color:'white', fontSize: '2vh', marginBottom:'.5%' }} onClick={handleOpenLogin}>Login</Button>
        </Toolbar>     
      </AppBar>
      <SignUpDialog open={signup} handleClose={handleClose} />
      <LogInDialog open={login} handleClose={handleCloseLogin} /> 

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
