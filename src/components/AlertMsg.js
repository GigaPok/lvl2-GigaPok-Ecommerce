import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ALertMsg = ({ msg }) => {
  const classes = useStyles();

  return (
    <Alert severity={msg}>{msg === 'success' ? 'This is a success message!' : 'This is a error message!'}</Alert>
  );
}

export default ALertMsg;