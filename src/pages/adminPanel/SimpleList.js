import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Route, BrowserRouter as Router, Switch, Link, useRouteMatch } from 'react-router-dom';
import { Add_Categorie, Add_Product, Add_User } from '../../router';
import NotFound from '../NotFound';
import { Table } from '@material-ui/core';
import User from './User';
import Categorie from './Categorie';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const SimpleList = () => {
    const classes = useStyles();

    let { path, url } = useRouteMatch();

    console.log(path, url);

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItemLink to={url + Add_Product} component={Link}>
                    <ListItemText primary="Products" />
                </ListItemLink>
                <ListItemLink to={url + Add_User} component={Link}>
                    <ListItemText primary="Users" />
                </ListItemLink>
                <ListItemLink to={url + Add_Categorie} component={Link}>
                    <ListItemText primary="Categories" />
                </ListItemLink>
            </List>
            <Router>

                <Switch>
                    <Route path={path + Add_Product} component={Table} exact />
                    <Route path={path + Add_User} component={User} exact />
                    <Route path={path + Add_Categorie} component={Categorie} exact />
                    <Route component={NotFound} />
                </Switch>
            </Router>

            <Divider />

        </div>
    );
}

export default SimpleList;
