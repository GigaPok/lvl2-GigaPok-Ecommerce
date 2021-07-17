import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleList from './SimpleList';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


const SideBar = () => {
    const classes = useStyles();

    return (
        <>
            <SimpleList></SimpleList>
        </>
    );
}

export default SideBar;
