import React from 'react';
import Dialog from '@mui/material/Dialog';
import Form from './LogInForm';

const SignUpDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default SignUpDialog;