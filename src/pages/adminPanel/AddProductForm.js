import React from 'react';
import { useFormik } from 'formik';
import useStyles from './formStyle';

const AddProductForm = () => {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            Title: '',
            Price: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Title</label>
            <input
                id="Title"
                name="Title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />

            <label htmlFor="lastName">Price</label>
            <input
                id="Price"
                name="Price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddProductForm;