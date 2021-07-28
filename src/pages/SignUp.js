import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useStyles } from './SignInStyle';
import { Sign_In } from '../router';
import * as Yup from 'yup';
import ALertMsg from '../components/AlertMsg';

const SignUp = () => {

    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState('')
    const [succesText, setSuccessText] = useState('')
    const [errorText, setErrorText] = useState('')

    const [login, setLogin] = useState(false)


    const SignupSchema = Yup.object().shape({
        firstname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('შევსება აუცილებელია'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('შევსება აუცილებელია'),
        password_confirmation: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .oneOf([Yup.ref('password'), null], 'შეიყვანეთ იგივე პაროლი')
            .required('შევსება აუცილებელია'),
        email: Yup.string().email('Invalid email').required('შევსება აუცილებელია'),
    });


    const classes = useStyles()

    return (
        <>
            <Box mt={10} textAlign='center' className={classes.title}>Sign Up</Box >
            <MainLayout>
                <Box my={20}>
                    <Formik
                        initialValues={{
                            firstname: '',
                            email: '',
                            password: '',
                            password_confirmation: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {

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
                            }).then(respos => {
                                setSuccess(true)
                                if (respos.status == 422) {
                                    setMsg('error')
                                    setErrorText('მაილი უკვე გამოყენებულია, სცადეთ სხვა მაილი')
                                    setTimeout(() => {
                                        setSuccess(false)
                                    }, 2000)
                                } else {
                                    setMsg('success')
                                    setSuccessText('თქვენ წარმატებით დარეგისტრირდით')
                                    setTimeout(() => {
                                        setLogin(true)
                                    }, 2000)
                                }
                            }
                            )

                                .catch(error => console.log('error', error))
                        }}>
                        {({ errors, touched, handleChange, values }) => (
                            <Form>
                                <Grid container spacing={5} display='flex' alignItems='center'>
                                    <Grid item md={6} className={classes.item}>
                                        <TextField
                                            className={classes.root}
                                            id="firstname"
                                            label="First Name"
                                            onChange={handleChange}
                                            value={values.firstname}
                                            variant="outlined"
                                        />

                                        {errors.firstname && touched.firstname ? (
                                            <div>{errors.firstname}</div>
                                        ) : null}

                                    </Grid>
                                    <Grid item md={6} className={classes.item}>
                                        <TextField
                                            className={classes.root}
                                            id="email"
                                            label="Email"
                                            onChange={handleChange}
                                            value={values.email}
                                            variant="outlined"
                                        />

                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}

                                    </Grid>
                                    <Grid item xs={12} className={classes.item}>
                                        <TextField
                                            className={classes.root}
                                            id="password"
                                            label="Your Password"
                                            onChange={handleChange}
                                            value={values.password}
                                            variant="outlined"
                                        />

                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}

                                    </Grid>
                                    <Grid item xs={12} className={classes.item}>
                                        <TextField
                                            className={classes.root}
                                            id="password_confirmation"
                                            label="Password Confirmation"
                                            onChange={handleChange}
                                            value={values.password_confirmation}
                                            variant="outlined"
                                        />

                                        {errors.password_confirmation && touched.password_confirmation ? (
                                            <div>{errors.password_confirmation}</div>
                                        ) : null}

                                    </Grid>
                                    <Grid item xs={12} className={classes.item}>
                                        <Box display='flex' justifyContent='center'>
                                            <Button type='submit' variant="contained" color="primary">
                                                Sign Up
                                            </Button>
                                        </Box>
                                        {success ? <ALertMsg msg={msg} succesText={succesText} errorText={errorText} /> : ''}
                                    </Grid>
                                </Grid>
                            </Form>
                        )}

                    </Formik>

                </Box>
            </MainLayout>
            {login && <Redirect to={Sign_In} />}
        </>
    );
};

export default SignUp;