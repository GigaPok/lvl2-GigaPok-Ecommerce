import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { SinglePageAbout } from './components/SinglePageAbout';
import { getSingleProduct } from '../../services/product';
import MainLayout from '../../layouts/MainLayout';


const useStyles = makeStyles((theme) => ({
    rame: {

    },
}));

export const SinglePage = () => {
    const classes = useStyles()

    const [data, setData] = useState()

    const { paramId: id } = useParams()

    useEffect(() => {
        getSingleProduct(id)
            .then(data => setData(data));
    }, [id])

    return (
        <>
            <MainLayout>
                <Box my={10} display='flex' justifyContent="center">Product page</Box>
                <Container>
                    {data && (
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <div className={classes.root}>
                                    <ImageList rowHeight={360} className={classes.imageList} cols={4}>
                                        <ImageListItem key={data.id} cols={data.cols || 1}>
                                            <img src={data.image} />
                                        </ImageListItem>
                                    </ImageList>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <SinglePageAbout></SinglePageAbout>
                            </Grid>
                        </Grid>
                    )}

                </Container>
            </MainLayout>
        </>
    );
};
