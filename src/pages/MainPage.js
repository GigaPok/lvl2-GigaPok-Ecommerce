import { makeStyles } from '@material-ui/core';
import { Box, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
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

    const [data, setData] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, , 1, 2, 3
    ])

    return (
        <>
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
                        <Grid container spacing={2}>
                            {data.map(el => (
                                <Grid item xs={3}>
                                    <CardItem></CardItem>
                                </Grid>
                            ))}
                        </Grid>
                        <Box className={classes.rame}>
                            <ItemStyle></ItemStyle>
                            <Typography>Label example</Typography>
                            <PaginationRanges></PaginationRanges>
                        </Box>

                    </Grid>
                </Grid>

            </MainLayout>
        </>
    );
};

export default MainPage;