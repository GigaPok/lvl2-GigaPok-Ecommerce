import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import SideBarTitle from './SideBarTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        // margin: theme.spacing(4, 0, 2),
    },
    list: {
        padding: 0,
    }
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Subcategories = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SideBarTitle text='Subcategories' />
                    <div className={classes.demo}>
                        {generate(
                            <ListItem className={classes.list}>
                                <ListItemText
                                    primary="Single-line item3"
                                />

                            </ListItem>,
                            <ListItem className={classes.list}>
                                <ListItemText
                                    primary="Single-line item2"
                                />

                            </ListItem>,
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Subcategories;
