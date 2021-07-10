import { AppBar, Box, Button, CardMedia, Container, Grid, Link, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Footer from '../components/Footer';
import useStyles from './MainLayoutStyles';

const MainLayout = ({ children }) => {

    const classes = useStyles()

    return (
        <>
            <Container bgcolor='white'>
                <Grid>
                    <Grid item xs={12}>
                        <AppBar position="fixed" color='transparent'>
                            <Toolbar variant="dense">

                                <Typography variant="h6" className={classes.title}>
                                    <Link href='/'>
                                        <i class="fab fa-mdb fa-3x" alt="mdb logo"></i>
                                    </Link>
                                </Typography>
                                <Link color='white'>Shop</Link>
                                <Link color='white'>Contact</Link>
                                <Link color='white'>Sign In</Link>
                                <Button variant="contained" color="primary">Sign Up</Button>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </Container>
            <Box style={{ position: 'relative' }} container='false'>
                <CardMedia
                    className={classes.img}
                    component="img"
                    image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
                />
                <Typography className={classes.shopText} variant="h2">Shop</Typography>
            </Box>
            <Container maxWidth='lg'>
                {children}
            </Container>
            <Footer>

            </Footer>

        </>
    );
};

export default MainLayout;