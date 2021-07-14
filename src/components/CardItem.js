import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: '30px',
        textAlign: 'center'
    },
    media: {
        height: 300,
        backgroundSize: 'cover',
    },
});

const CardItem = ({ title, price, image, id }) => {


    const classes = useStyles();
    return (
        <>
            <Link to={`single/${id}`}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component='div'
                            image={image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h5">
                                {price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
    );
}

export default CardItem;
