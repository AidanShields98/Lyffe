import React from 'react';
import ContentCards from '../components/ContentCards';
import pages from '../assets/pages';
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
        mb: 4,
        height: '120px',
      }}
    >
      <Typography variant='h3' component='h1' color='primary'>
        Welcome {user.given_name}
      </Typography>
    </Box>
  );
};

const HomeText = () => {
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

export function Home() {
  return (
    <div className='home-root'>
      <HomeTitle />
      <HomeText />
      <div className='home-cards'>
        {pages.map((page, index) => (
          <ContentCards key={index} pages={page} />
        ))}
      </div>
    </div>
  );
}
