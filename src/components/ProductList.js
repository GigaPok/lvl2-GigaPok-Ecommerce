import { Grid } from '@material-ui/core';
import React from 'react';
import CardItem from './CardItem';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductList = () => {


    const [data, setData] = useState()

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/`)
            .then(res => res.json())
            .then(json => {

                setData(json.map(el => {

                    return {
                        title: el.title,
                        price: el.price,
                        image: el.image,
                        id: el.id
                    }

                }))

            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            {data && (
                <Grid container spacing={2}>
                    {data.map((el, index) => (
                        <Grid item md={3} xs={12} sm={6} key={index}>
                            <CardItem title={data[index].title} price={data[index].price} image={data[index].image} id={data[index].id}></CardItem>
                        </Grid>
                    ))}

                </Grid>
            )}

        </>
    );
};

export default ProductList;