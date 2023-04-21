import React, { useEffect, useState } from "react";
import { Collapse, IconButton, Typography } from "@material-ui/core";
import LoginButton from "./LoginButton";
import { Stack } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const HeroBanner = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => { 
    setChecked(true);
   }, []);
  return (
<Stack
  sx={{
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '80vh', // reduce the minHeight value
    padding: '2rem',
    position: 'relative',
  }}
>
      <Collapse in={checked}  {...(true ? { timeout: 1000} : {} )} collapsedSize={100}> 
      <Typography variant="h1" className="hero-title" gutterBottom>
        Welcome to Lyffe
      </Typography>
      <Typography variant="h5" className="hero-para" gutterBottom>
        Discover a new way to achieve your fitness goals
      </Typography>
      <LoginButton />
      </Collapse>
    </Stack>
  );
};


export default HeroBanner;
