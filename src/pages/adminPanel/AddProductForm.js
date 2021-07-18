import React from 'react';
import { useFormik } from 'formik';
import useStyles from './formStyle';

const AddProductForm = () => {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            Title: '',
            Price: '',
            Img: '',
        },
        onSubmit: values => {
            fetch('https://fakestoreapi.com/products', {

                method: "POST",
                body: JSON.stringify(
                    {
                        title: values.Title,
                        price: values.price,
                        category: values.Img
                    }
                )
            })
                .then(res => res.json())
                .then(json => console.log('es', json))

            console.log('values', values);
        },
    });
    return (
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

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddProductForm;