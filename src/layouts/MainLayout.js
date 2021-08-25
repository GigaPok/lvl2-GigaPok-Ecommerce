import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Admin_Panel, Sign_In, Sign_Up } from '../router';
import { logout } from '../store/user/userActionCreator';
import { isLogginIn } from '../store/user/userSelector';
import useStyles from './MainLayoutStyles';

const MainLayout = ({ children }) => {

    const dispatch = useDispatch()

    const user = useSelector(isLogginIn)

    console.log('esLoguet', user);

    const Loguet = () => {
        dispatch(logout())
        localStorage.removeItem('userInfo')
    }

    const classes = useStyles()

    return (
        <>
            <Container>
                <Grid>
                    <Grid item xs={12}>
                        <AppBar position="fixed" color='default'>
                            <Toolbar variant="dense">
                                <Typography variant="h6" className={classes.title}>
                                    <Link to='/'>
                                        <i className="fab fa-mdb fa-3x" alt="mdb logo"></i>
                                    </Link>
                                </Typography>
                                <Box>
                                    <Link to='/' className={classes.a}>Contact</Link>
                                </Box>
                                <Box mx={2}>
                                    <Link className={classes.a} to={Admin_Panel}>Admin Panel</Link>
                                </Box>
                                {user ?
                                    <Link to='/' onClick={Loguet}>
                                        <Button variant="contained" color="primary">Loguet</Button>
                                    </Link>
                                    : <Box display='flex' alignItems='center'>
                                        <Box mr={2}>
                                            <Link className={classes.a} to={Sign_In}>Sign In</Link>
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