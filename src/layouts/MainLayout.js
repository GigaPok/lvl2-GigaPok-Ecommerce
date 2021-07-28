import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Admin_Panel, Sign_In, Sign_Up } from '../router';
import { UserContext } from '../store/UserContext';
import useStyles from './MainLayoutStyles';

const MainLayout = ({ children }) => {

    const userData = useContext(UserContext)

    const Loguet = () => {
        userData.setData({
            ...userData.data,
            isLoggedIn: false,
        })
        localStorage.removeItem('userInfo');
    }

    const classes = useStyles()

    return (

        <>
            <Container>
                <Grid>
                    <Grid item xs={12}>
                        <AppBar position="fixed" color='white'>
                            <Toolbar variant="dense">
                                <Typography variant="h6" className={classes.title}>
                                    <Link to='/'>
                                        <i class="fab fa-mdb fa-3x" alt="mdb logo"></i>
                                    </Link>
                                </Typography>
                                <Box>
                                    <Link className={classes.a} color='white'>Contact</Link>
                                </Box>
                                <Box mx={2}>
                                    <Link className={classes.a} color='white' to={Admin_Panel}>Admin Panel</Link>
                                </Box>
                                {userData.data.isLoggedIn ?
                                    <Link onClick={Loguet}>
                                        <Button variant="contained" color="primary">Loguet</Button>
                                    </Link>
                                    : <Box display='flex' alignItems='center'>
                                        <Box mr={2}>
                                            <Link className={classes.a} to={Sign_In} color='white'>Sign In</Link>
                                        </Box>
                                        <Link to={Sign_Up}>
                                            <Button variant="contained" color="primary">Sign Up</Button>
                                        </Link>
                                    </Box>}
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