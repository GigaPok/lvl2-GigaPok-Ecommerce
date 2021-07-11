import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const PaginationRanges = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination count={11} defaultPage={1} /> {/* Default ranges */}
        </div>
    );
}

export default PaginationRanges;
