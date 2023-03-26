import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (

      <IconButton aria-label="delete" sx={{ color: "#fff" }} onClick={() => logout()}>
        <LogoutIcon  />
      </IconButton>
    )


  )
}

export default LogoutButton
