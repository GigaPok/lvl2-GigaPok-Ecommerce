import { AppBar, Box, Button, Container, Grid, IconButton, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Footer = () => {

    const classes = useStyles()

    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box bgcolor='text.secondary' color='white'>
                <Container maxWidth='lg'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>About Me</Box>
                            <Box>
                                <Typography href='/' color={'inherit'}>
                                    Here you can use rows and columns to organize your footer content.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Link</Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    MDBootstrap
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    MDWordPress
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    BrandFlow
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    Bootstrap Angular
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Useful links</Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    Your Account
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    Become an Affiliate
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    Shipping Rates
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    Help
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Contacts</Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    New York, Avenue Street 10
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    042 876 836 908
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    company@example.com
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color={'inherit'}>
                                    Monday - Friday: 10-17
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    );
};

export default Footer;