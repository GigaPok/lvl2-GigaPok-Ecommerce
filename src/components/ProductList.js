import { Grid } from '@material-ui/core';
import React from 'react';
import CardItem from './CardItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllProduct } from '../services/product';
import Loading from './Loading';

const ProductList = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getAllProduct()
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {data && (

                <Loading isLoading={loading}>
                    <Grid container spacing={2}>
                        {data.map((el, index) => (
                            <Grid item md={3} xs={12} sm={6} key={index}>
                                <CardItem title={data[index].title} price={data[index].price} image={data[index].image} id={data[index].id}></CardItem>
                            </Grid>
                        ))}

                    </Grid>
                </Loading>

            )}

        </>
    );
};

export default ProductList;