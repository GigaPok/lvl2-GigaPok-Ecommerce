import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const ALertMsg = ({ type, text }) => {

  return (
    <Alert severity={type}>{text}</Alert>
  );
}

export default ALertMsg;