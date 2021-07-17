import { Container, Grid } from '@material-ui/core';
import React from 'react';
import SideBar from '../pages/adminPanel/Sidebar';
import useStyles from './MainLayoutStyles';

const AdminPanel = ({ children }) => {

    const classes = useStyles()

    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <SideBar></SideBar>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AdminPanel;