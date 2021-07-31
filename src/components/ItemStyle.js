import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    rame: {
        marginRight: '5px',
    }
}))

const ItemStyle = () => {

    const classes = useStyles()

    return (
        <Box display='flex'>
            <Box className={classes.rame}>
                <i className="fas fa-th-list fa-lg mr-1"></i>
            </Box>
            <Box>
                <i className="fas fa-th-large fa-lg"></i>
            </Box>
        </Box>
    );
};

export default ItemStyle;