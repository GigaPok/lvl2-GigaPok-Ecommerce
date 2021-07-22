import { Box, Button, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useStyles } from './SignInStyle';
import { Sign_In } from '../router';

const SignUp = () => {


    const [login, setLogin] = useState(false)

    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            firstname: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        onSubmit: values => {
            console.log(values);

            fetch('http://159.65.126.180/api/register', {

                method: "POST",
                body: JSON.stringify(

                    {
                        name: values.firstname,
                        email: values.email,
                        password: values.password,
                        password_confirmation: values.password_confirmation
                    },

                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(
                    setTimeout(() => {
                        setLogin(true)
                    }, 500)
                )
                .catch(error => console.log(error))

        },
    });

    return (
        <>
            <Box mt={10} textAlign='center' className={classes.title}>Sign Up</Box >
            <MainLayout>
                <Box my={20}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={5} display='flex' alignItems='center'>
                            <Grid item md={6} className={classes.item}>
                                <TextField
                                    className={classes.root}
                                    id="firstname"
                                    label="First Name"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                />
                            </Grid>
                            <Grid item md={6} className={classes.item}>
                                <TextField
                                    className={classes.root}
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.item}>
                                <TextField
                                    className={classes.root}
                                    id="password"
                                    label="Your Password"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.item}>
                                <TextField
                                    className={classes.root}
                                    id="password_confirmation"
                                    label="Password Confirmation"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.password_confirmation}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.item}>
                                <Box display='flex' justifyContent='center'>
                                    <Button type='submit' variant="contained" color="primary">
                                        Sign Up
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>

            </MainLayout>
            {login && <Redirect to={Sign_In} />}
        </>
    );
};

export default SignUp;