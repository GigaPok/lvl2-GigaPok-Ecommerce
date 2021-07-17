import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasicTable from '../pages/adminPanel/Table';
import User from '../pages/adminPanel/User';
import Categorie from '../pages/adminPanel/Categorie';
import NotFound from '../pages/NotFound';
import { Add_Categorie, Add_Product, Add_User, HOME } from '../router';
import useStyles from './MainLayoutStyles';
import AdminSideBar from '../pages/adminPanel/AdminSideBar';
import MainPage from '../pages/MainPage';

const AdminPanel = ({ }) => {

    const classes = useStyles()

    return (
        <>
            <Container>
                <Router>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <AdminSideBar></AdminSideBar>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Switch>
                                <Route path={Add_Product} component={BasicTable} exact />
                                <Route path={Add_User} component={User} exact />
                                <Route path={Add_Categorie} component={Categorie} exact />
                                <Route path={HOME} component={MainPage} exact />
                                <Route component={NotFound} />
                            </Switch>
                        </Grid>
                    </Grid>
                </Router>
            </Container>
        </>
    );
};

export default AdminPanel;