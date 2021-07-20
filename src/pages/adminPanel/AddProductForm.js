import React, { useState } from 'react';
import { useFormik } from 'formik';
import useStyles from './formStyle';
import ALertMsg from '../../components/AlertMsg';
import { createProduct } from '../../services/product'

const AddProductForm = () => {

    const [disable, setDisable] = useState(false)

    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState('')

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            Title: '',
            Price: '',
            Img: '',
        },
        onSubmit: values => {
            setDisable(true)

            createProduct(values)
                .then(respons => {
                    if (respons.ok) {
                        console.log('resp', respons);
                        return respons.json()
                    } else {
                        setMsg('error')
                    }
                }).catch((error) => {
                    setMsg('error')
                    console.log(error);
                })
                .then(json => console.log('Response', json))
                .finally(() => {

                    setMsg('success')
                    setSuccess(true)

                    setDisable(false)

                    setTimeout(() => {
                        setSuccess(false)
                    }, 2000);
                })

            console.log('values', values);
        },
    });
    return (
        <>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <label htmlFor="Title">Title</label>
                <input
                    id="Title"
                    name="Title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <label htmlFor="Price">Price</label>
                <input
                    id="Price"
                    name="Price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <label htmlFor="IMG">IMG</label>
                <input
                    id="Img"
                    name="Img"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <button disabled={disable} type="submit">Submit</button>
            </form>
            {success ? <ALertMsg success={success} msg={msg} /> : ''}
        </>
    );
};

export default AddProductForm;