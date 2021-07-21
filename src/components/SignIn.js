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
        },
    });

    return (
        <>
            <MainLayout>
                <Box mt={10} textAlign='center'>Sign In</Box >
                <Box my={20}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container direction={"column"} spacing={5} display='flex' alignItems='center'>
                            <Grid item>
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
                                    label="Password"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </Grid>
                            <Grid item>
                                <Button type='submit' variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>

            </MainLayout>
        </>
    );
};

export default SignIn;