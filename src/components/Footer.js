import { AppBar, Box, Container, Grid, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';
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
    bcolor: {
        backgroundColor: '#b4b4b4',
        height: '200px'
    }
}));

const Footer = () => {

    const classes = useStyles()

    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters={true}>
                        <Typography variant="h6" className={classes.title}>
                            Get connected with us on social networks!
                        </Typography>
                        <Box display="flex">
                            <Box>
                                <Link color="inherit">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </Box>
                            <Box mx={2}>
                                <Link color="inherit">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </Box>
                            <Box>
                                <Link color="inherit">
                                    <i className="fab fa-google-plus-g"></i>
                                </Link>
                            </Box>
                            <Box mx={2}>
                                <Link color="inherit">
                                    <i className="fab fa-invision"></i>
                                </Link>
                            </Box>
                            <Box>
                                <Link color="inherit">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box className={classes.bcolor}>
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