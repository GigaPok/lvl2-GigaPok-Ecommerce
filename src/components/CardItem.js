import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Single_Product_ID } from '../router';
import { addToCart } from '../store/cart/cartActionCreator';

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
    const dispatch = useDispatch()

    return (
        <>
            <Link to={`${Single_Product_ID}${id}`}>
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
            <button onClick={() => dispatch(addToCart(id))}>Add To cart</button>
        </>
    );
}

export default CardItem;
