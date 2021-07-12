import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import CardItem from './CardItem';

const ProductList = () => {

    const [data, setData] = useState([
        {
            id: 1,
            title: 'Yellow hoodie',
            price: '$39.99',
            img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
        },
        {
            id: 2,
            title: 'Red hoodie',
            price: '$59.99',
            img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
        },
        {
            id: 3,
            title: 'Green hoodie',
            price: '$49.99',
            img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
        },
        {
            id: 4,
            title: 'Black hoodie',
            price: '$39.99',
            img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
        }

    ])

    return (
        <>
            <Grid container spacing={2}>
                {data.map((el, index) => (
                    <Grid item md={3} xs={12} sm={6} key={index}>
                        <CardItem title={el.title} price={el.price} image={el.img} id={el.id}></CardItem>
                    </Grid>
                ))}

            </Grid>
        </>
    );
};

export default ProductList;