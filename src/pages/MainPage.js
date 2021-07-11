import { CardMedia, makeStyles } from '@material-ui/core';
import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ItemStyle from '../components/ItemStyle';
import PaginationRanges from '../components/Pagination';
import ProductList from '../components/ProductList';
import SideBar from '../components/Sidebar';
import MainLayout from '../layouts/MainLayout';

const useStyles = makeStyles((theme) => ({
    rame: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
    },
    shopText: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    img: {
        height: 400,
    },
}));

const MainPage = () => {
    const classes = useStyles()

    return (
        <>
            <Box style={{ position: 'relative' }}>
                <CardMedia
                    className={classes.img}
                    component="img"
                    image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
                />
                <Typography className={classes.shopText} variant="h2">Shop</Typography>
            </Box>
            <MainLayout>
                <Grid container spacing={2} wrap>
                    <Grid item xs={4}>
                        <SideBar></SideBar>
                    </Grid>
                    <Grid item xs={8}>
                        <Box className={classes.rame}>
                            <ItemStyle></ItemStyle>
                            <Typography>Label example</Typography>
                            <PaginationRanges></PaginationRanges>
                        </Box>
                        <ProductList></ProductList>
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