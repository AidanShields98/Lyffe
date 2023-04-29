import React from 'react'
import { Auth0Context } from '@auth0/auth0-react';
import { Typography, Box } from '@mui/material';
const HomeTitle = () => {
    const { user } = React.useContext(Auth0Context);
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120px',
        }}
      >
        <Typography variant='h3' component='h1' color='primary'>
          Welcome {user.given_name}
        </Typography>
      </Box>
    );
  };

export default HomeTitle