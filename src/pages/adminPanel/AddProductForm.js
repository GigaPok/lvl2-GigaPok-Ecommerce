import React, { useState } from 'react';
import { useFormik } from 'formik';
import useStyles from './formStyle';
import ALertMsg from '../../components/AlertMsg';
import { createProduct } from '../../services/product'

const initMessage = {
    type: null,
    text: '',
    isVisible: false,
}

const AddProductForm = () => {

    const [message, setMessage] = useState(initMessage);

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            Title: '',
            Price: '',
            Img: '',
        },
        onSubmit: (values, { setSubmitting }) => {

            createProduct(values)
                .then(json => console.log('Response', json))
                .then(() => {
                    setMessage({
                        type: 'success',
                        text: 'წარმატებით დაემატა',
                        isVisible: true,
                    });
                })
                .catch((error) => {
                    setMessage({
                        type: 'error',
                        text: 'დაფიქსირდა შეცდომა',
                        isVisible: true,
                    });
                })
                .finally(() => {
                    setTimeout(() => {
                        setMessage(initMessage);
                    }, 2000);

                    setSubmitting(false);
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
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <button disabled={formik.isSubmitting} type="submit">Submit</button>
            </form>
            {message.isVisible ? <ALertMsg type={message.type} text={message.text} /> : ''}
        </>
    );
};

export default AddProductForm;