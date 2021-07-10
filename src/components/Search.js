import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            width: '25ch',
        },
    },
    search: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const Search = ({ label, noshow }) => {
    const classes = useStyles();
    const [show, setShow] = useState()

    useEffect(() => {
        setShow(noshow)
    }, [])

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Box className={classes.search}>
                <TextField id="outlined-basic" label={label} variant="outlined" />
                {show ? <SearchIcon></SearchIcon> : null}
            </Box>

        </form>
    );
}

export default Search;
