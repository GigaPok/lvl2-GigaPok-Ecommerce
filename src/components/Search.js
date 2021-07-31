import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    search: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const Search = ({ label, noshow }) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Box className={classes.search}>
                <TextField id="outlined-basic" label={label} variant="outlined" />
                {noshow ? <SearchIcon></SearchIcon> : null}
            </Box>

        </form>
    );
}

export default Search;
