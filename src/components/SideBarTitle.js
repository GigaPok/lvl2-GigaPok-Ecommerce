import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    h6: {
        color: '#4f4f4f',
        fontSize: '1.25rem',
        marginTop: '30px',
        marginBottom: '15px'
    },

}));

const SideBarTitle = ({ text }) => {

    const classes = useStyles()

    return (
        <Typography component='h6' className={classes.h6}>{text}</Typography >
    );
};

export default SideBarTitle;