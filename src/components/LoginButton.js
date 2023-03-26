import React from 'react'
import { useAuth0} from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    !isAuthenticated && (
        <Button className='landing-button' onClick={ () => loginWithRedirect()} variant="contained" color="primary">
      Login In
    </Button> 
    ) 

   
  )
}

export default LoginButton
