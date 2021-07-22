import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const ALertMsg = ({ msg }) => {

  return (
    <Alert severity={msg}>{msg === 'success' ? 'This is a success message!' : 'This is a error message!'}</Alert>
  );
}

export default ALertMsg;