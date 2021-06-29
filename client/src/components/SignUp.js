import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from './Form';

const SignUp = ({ open, handleClose }) => {
  return (
    // props received from LogIn page
    <Dialog open={open} onClose={handleClose}>
      {/* form to be created */}
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default SignUp;