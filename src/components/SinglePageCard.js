import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: '100%',
    },
}));


const itemData = [
    {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
        cols: 4,
    },
    {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
        cols: 1,
    },
    {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
        cols: 1,
    },
    {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
        cols: 1,
    },
    {
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
        cols: 1,
    },

];

const SinglePageCard = ({ }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ImageList rowHeight={360} className={classes.imageList} cols={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <img src={item.img} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default SinglePageCard;
