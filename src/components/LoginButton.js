import React from 'react'
import { useAuth0} from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    !isAuthenticated && (
        <Button onClick={ () => loginWithRedirect()}>
      Login In
    </Button> 
    ) 

   
  )
}

export default LoginButton
