import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { CardReview } from './CardReview';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

export const SinglePageAbout = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant='h6'> Blue denim shirt</Typography>
            <Typography variant='p'> SHIRTS</Typography>
            <CardReview></CardReview>
            <Typography variant='h6'>$17.99</Typography>
            <Typography variant='p'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis
                voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.
            </Typography>

        </Box>
    );
}
