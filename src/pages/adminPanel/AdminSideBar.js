import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link, useRouteMatch } from 'react-router-dom';
import { Add_Categorie, Add_Product, Add_User, HOME } from '../../router';
import MainPage from '../MainPage';

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

const AdminSideBar = () => {
    const classes = useStyles();

    let { path, url } = useRouteMatch();

    console.log(path, url);

    return (
        <div className={classes.root}>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItemLink to={Add_Product} component={Link}>
                    <ListItemText primary="Products" />
                </ListItemLink>
                <ListItemLink to={Add_User} component={Link}>
                    <ListItemText primary="Users" />
                </ListItemLink>
                <ListItemLink to={Add_Categorie} component={Link}>
                    <ListItemText primary="Categories" />
                </ListItemLink>
                <ListItemLink to={HOME} component={Link}>
                    <ListItemText primary="Home Page" />
                </ListItemLink>
            </List>
            <Divider />

        </div>
    );
}

export default AdminSideBar;
