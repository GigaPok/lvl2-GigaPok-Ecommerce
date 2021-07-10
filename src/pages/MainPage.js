import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import CheckboxesGroup from '../components/Checkbox';
import Color from '../components/Color';
import SideBar from '../components/Sidebar';
import SideBarTitle from '../components/SideBarTitle';
import MainLayout from '../layouts/MainLayout';


const MainPage = () => {
    return (
        <MainLayout>
            <Grid container>
                <Grid item xs={4}>
                    <SideBar></SideBar>
                    <Color />
                </Grid>
                <Grid item xs={8}>
                    <Typography component="p">მარჯვენა</Typography>
                    <CheckboxesGroup></CheckboxesGroup>
                    <SideBarTitle></SideBarTitle>
                </Grid>
            </Grid>

        </MainLayout>
    );
};

export default MainPage;