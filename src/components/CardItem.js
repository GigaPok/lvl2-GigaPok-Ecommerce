import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

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

const CardItem = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Red hoodie
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                $99.99
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Red hoodie
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                $99.99
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Red hoodie
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                $99.99
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Red hoodie
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                $99.99
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>

    );
}

export default CardItem;
