import React, { useState } from 'react';
import { useFormik } from 'formik';
import ALertMsg from '../../components/AlertMsg';
import useStyles from '../../components/productListStyle';
import { userUpdate } from '../../services/auth';
import { selectUser } from '../../store/user/userSelector';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/user/userActionCreator';

const initMessage = {
    type: null,
    text: '',
    isVisible: false,
}

const UserUpdateForm = () => {

    const [message, setMessage] = useState(initMessage);
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            name: user.name,
        },
        onSubmit: (values, { setSubmitting }) => {

            userUpdate(values, user.id)
                .then(user => {
                    setMessage({
                        type: 'success',
                        text: 'წარმატებით დაემატა',
                        isVisible: true,
                    });
                    dispatch(setUser(user));
                })
                .catch(() => {
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

        },
    });
    return (
        <>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input
                    id="Name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <button disabled={formik.isSubmitting} type="submit">Submit</button>
            </form>
            {message.isVisible ? <ALertMsg type={message.type} text={message.text} /> : ''}
        </>
    );
};

export default UserUpdateForm;