import { Grid } from '@material-ui/core';
import React from 'react';
import CardItem from '../components/CardItem';
import Color from '../components/Color';
import SideBar from '../components/Sidebar';
import MainLayout from '../layouts/MainLayout';


const MainPage = () => {
    return (
        <MainLayout>
            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <SideBar></SideBar>
                    <Color />
                </Grid>
                <Grid item xs={8}>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                </Grid>
            </Grid>

        </MainLayout>
    );
};

export default MainPage;