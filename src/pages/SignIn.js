import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Form, Formik, useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useStyles } from './SignInStyle';
import * as Yup from 'yup';
import ALertMsg from '../components/AlertMsg';
import { UserContext } from '../store/UserContext';


const SignIn = () => {

    const userData = useContext(UserContext)

    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState('')
    const [succesText, setSuccessText] = useState('')
    const [errorText, setErrorText] = useState('')

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
                        onSubmit={values => {


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

                                    setSuccess(true)

                                    if (json.errors) {
                                        setMsg('error')
                                        setErrorText('მონაცემები არასწორია')
                                        setTimeout(() => {
                                            setSuccess(false)
                                        }, 2000)
                                    } else {

                                        localStorage.setItem('userInfo', JSON.stringify(json))
                                        setMsg('success')
                                        setSuccessText('ინფორმაცია სწორია')

                                        userData.setData({

                                            ...userData.data,
                                            isLoggedIn: true,
                                        })

                                        setTimeout(() => {
                                            setSuccess(false)
                                        }, 2000)
                                    }

                                }).catch(error => console.log('err', error))
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
                                        {success ? <ALertMsg msg={msg} succesText={succesText} errorText={errorText} /> : ''}
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </MainLayout>
        </>
    );
};

export default SignIn;