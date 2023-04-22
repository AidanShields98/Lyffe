import React from 'react'
import { Typography, Box } from '@mui/material';
export const HomeText = () => {
    return (
      <Box
        sx={{
          p: 2,
          textAlign: 'center',
          maxWidth: '65%',
          margin: '0 auto',
        }}
      >
        <Typography variant='body1' fontSize="2vh" color='textSecondary'>
          Welcome to your new Lyffe! We are so excited to have you here. We are here to help you build towards a better you. Heres an insight into how to navigate the app. 
        </Typography>
      </Box>
    );
  };
  

export default HomeText