import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../layouts/MainLayout';
import { selectUser } from '../../store/user/userSelector';
import UserUpdateForm from './UserUpdateForm';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: '500px'
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

const ProfilePage = () => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <UserUpdateForm></UserUpdateForm>
            <Box onClick={handleClose}>Close</Box>
        </div>
    );


    const user = useSelector(selectUser)

    console.log('profile', user);

    return (
        <>
            <Box mt={10} textAlign='center' className={classes.title}>MyProfile</Box >

            <MainLayout>
                <Box my={20}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`${user.cover}`}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {user.email}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={handleOpen} size="small" color="primary">
                                Edit
                            </Button>
                            <Button size="small" color="primary">
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                </Box>
            </MainLayout>
        </>
    );
};

export default ProfilePage;