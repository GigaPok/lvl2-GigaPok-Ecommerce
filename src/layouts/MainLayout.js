import { AppBar, Box, Button, CardMedia, Container, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Footer from '../components/Footer';
import useStyles from './MainLayoutStyles';

const MainLayout = ({ children }) => {

    const classes = useStyles()

    return (
        <>
            <Container>
                <Grid>
                    <Grid item xs={12}>
                        <AppBar position="fixed" color='transparent'>
                            <Toolbar variant="dense">
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    News
                                </Typography>
                                <Button color="inherit">Login</Button>
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
            <Container>
                <Footer>

                </Footer>
            </Container>

        </>
    );
};

export default MainLayout;