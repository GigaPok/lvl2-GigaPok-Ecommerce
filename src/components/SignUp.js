import { Box, Button, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useStyles } from './SignInStyle';

const SignUp = () => {

    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            phonenumber: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <>
            <MainLayout>
                <Box mt={10} textAlign='center'>Sign Up</Box >
                <Box my={20}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container direction={"column"} spacing={5} display='flex' alignItems='center'>
                            <Grid item xs={12}>
                                <TextField
                                    id="firstname"
                                    label="First Name"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                />
                                <TextField
                                    id="lastname"
                                    label="Last Name"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                />
                            </Grid>
                            <Grid item item xs={12}>
                                <TextField
                                    id="email"
                                    label="Your Email"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="password"
                                    label="Your Password"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="phonenumber"
                                    label="Phone Number"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.phonenumber}
                                />
                            </Grid>
                            <Grid item>
                                <Button type='submit' variant="contained" color="primary">
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>

            </MainLayout>
        </>
    );
};

export default SignUp;