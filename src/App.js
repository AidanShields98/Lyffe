import React from 'react';
import BottomNavigation from './components/BottomNavigation';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import SignUpDialog from './components/SignUpDialog';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogInDialog from './components/LoginDialog'

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
           <Button sx={{  width: '10%', color:'white'  }} onClick={handleOpen}>Signup</Button>
           <Typography  component="div" sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px'  }}>
            Lyffe
          </Typography>
          <Button sx={{  width: '10%', color:'white'  }} onClick={handleOpenLogin}>Login</Button>
        </Toolbar>     
      </AppBar>
     
      <SignUpDialog open={signup} handleClose={handleClose} />
      <LogInDialog open={login} handleClose={handleCloseLogin} />
      <BottomNavigation />
    </div>
  );
}

export default App;
