// UserProfile.js
import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import BmiCalc from './Bmicalc';


const UserProfile = () => {
  const { user } = useAuth0();

  if (!user) return <div>Loading...</div>;

  return (
    <Box className="user-container">
      <Card className="user-card">
        <CardMedia className="user-media" image={user.picture} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
          <BmiCalc />
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
