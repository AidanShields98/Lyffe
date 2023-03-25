import React from 'react'
import { useAuth0} from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
        <Button onClick={ () => logout()}>
      Log out
    </Button> 
    ) 

   
  )
}

export default LogoutButton
