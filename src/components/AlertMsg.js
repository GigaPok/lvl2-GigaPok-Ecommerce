import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const ALertMsg = ({ msg, succesText, errorText }) => {

  return (
    <Alert severity={msg}>{msg === 'success' ? `${succesText}` : `${errorText}`}</Alert>
  );
}

export default ALertMsg;