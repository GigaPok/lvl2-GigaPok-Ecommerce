import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import SinglePageAbout from '../components/SinglePageAbout';
import SinglePageCard from '../components/SinglePageCard';
import MainLayout from '../layouts/MainLayout';

const useStyles = makeStyles((theme) => ({
    rame: {

    },
}));

const SinglePage = () => {
    const classes = useStyles()

    return (
        <>
            <MainLayout>
                <Box my={10} display='flex' justifyContent="center">Product page</Box>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <SinglePageCard></SinglePageCard>
                        </Grid>
                        <Grid item xs={6}>
                            <SinglePageAbout></SinglePageAbout>
                        </Grid>
                    </Grid>
                </Container>
            </MainLayout>
        </>
    );
};

export default SinglePage;