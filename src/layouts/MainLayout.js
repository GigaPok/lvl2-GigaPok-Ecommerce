import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Admin_Panel, Sign_In, Sign_Up } from '../router';
import useStyles from './MainLayoutStyles';

const MainLayout = ({ children }) => {

    const classes = useStyles()

    return (
        <>
            <Container>
                <Grid>
                    <Grid item xs={12}>
                        <AppBar position="fixed" color='white'>
                            <Toolbar variant="dense">
                                <Typography variant="h6" className={classes.title}>
                                    <Link href='/'>
                                        <i class="fab fa-mdb fa-3x" alt="mdb logo"></i>
                                    </Link>
                                </Typography>
                                <Box>
                                    <Link className={classes.a} color='white'>Contact</Link>
                                </Box>
                                <Box mx={2}>
                                    <Link className={classes.a} color='white' to={Admin_Panel}>Admin Panel</Link>
                                </Box>
                                <Box mr={2}>
                                    <Link className={classes.a} to={Sign_In} color='white'>Sign In</Link>
                                </Box>
                                <Link to={Sign_Up}>
                                    <Button variant="contained" color="primary">Sign Up</Button>
                                </Link>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth='lg'>
                {children}
            </Container>
            <Footer>

            </Footer>

        </>
    );
};

export default MainLayout;