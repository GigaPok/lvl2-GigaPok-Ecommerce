import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useStyles } from './SignInStyle';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/user/userActions';
import { Redirect, useHistory } from 'react-router-dom';
import { Profile } from '../router';
import { isLogginIn } from '../store/user/userSelector';


const SignIn = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const user = useSelector(isLogginIn)


    const classes = useStyles()

    const SignupSchema = Yup.object().shape({

        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
    });


    return (
        <>
            <Box mt={10} textAlign='center' className={classes.title}>Sign In</Box >
            <MainLayout>
                <Box my={20}>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={body => {
                            dispatch(loginUser(body))

                        }} >
                        {({ errors, touched, handleChange, values }) => (
                            <Form>
                                <Grid container spacing={5} display='flex' alignItems='center' justifyContent='center'>
                                    <Grid item xs={7} className={classes.item}>
                                        <TextField
                                            className={classes.root}
                                            id="email"
                                            label="Your Email"
                                            variant="outlined"
                                            onChange={handleChange}
                                            value={values.email}
                                        />

                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}

                                    </Grid>
                                    <Grid item xs={7} className={classes.item}>
                                        <TextField
                                            className={classes.root}
                                            id="password"
                                            label="Password"
                                            variant="outlined"
                                            onChange={handleChange}
                                            value={values.password}
                                        />

                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box display='flex' justifyContent='center'>
                                            <Button type='submit' variant="contained" color="primary">
                                                Sign In
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </MainLayout>
            {user && <Redirect to={Profile} />}
        </>
    );
};

export default SignIn;