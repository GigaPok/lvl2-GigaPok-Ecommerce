import { makeStyles } from '@material-ui/core';
import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CardItem from '../components/CardItem';
import Color from '../components/Color';
import ItemStyle from '../components/ItemStyle';
import PaginationRanges from '../components/Pagination';
import SideBar from '../components/Sidebar';
import MainLayout from '../layouts/MainLayout';

const useStyles = makeStyles((theme) => ({
    rame: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
    },
}));

const MainPage = () => {
    const classes = useStyles()
    return (
        <MainLayout>
            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <SideBar></SideBar>
                    <Color />
                </Grid>
                <Grid item xs={8}>
                    <Box className={classes.rame}>
                        <ItemStyle></ItemStyle>
                        <Typography>Label example</Typography>
                        <PaginationRanges></PaginationRanges>
                    </Box>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <Box className={classes.rame}>
                        <ItemStyle></ItemStyle>
                        <Typography>Label example</Typography>
                        <PaginationRanges></PaginationRanges>
                    </Box>

                </Grid>
            </Grid>

        </MainLayout>
    );
};

export default MainPage;