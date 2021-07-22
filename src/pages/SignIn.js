import { Box, Button, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useStyles } from './SignInStyle';

const SignIn = () => {

    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);

            fetch('http://159.65.126.180/api/auth/login', {
                method: "POST",
                body: JSON.stringify(
                    {
                        email: values.email,
                        password: values.password,
                    }
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).catch(error => console.log(error))
                .then(res => res.json())
                .then(json => {
                    localStorage.setItem('userInfo', JSON.stringify(json));
                })
        },
    });

    return (
        <>
            <Box mt={10} textAlign='center' className={classes.title}>Sign In</Box >
            <MainLayout>
                <Box my={20}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={5} display='flex' alignItems='center' justifyContent='center'>
                            <Grid item xs={7} className={classes.item}>
                                <TextField
                                    className={classes.root}
                                    id="email"
                                    label="Your Email"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </Grid>
                            <Grid item xs={7} className={classes.item}>
                                <TextField
                                    className={classes.root}
                                    id="password"
                                    label="Password"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box display='flex' justifyContent='center'>
                                    <Button type='submit' variant="contained" color="primary">
                                        Sign In
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>

            </MainLayout>
        </>
    );
};

export default SignIn;