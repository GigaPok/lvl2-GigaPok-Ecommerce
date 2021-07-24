import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CardItem from './CardItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllProduct } from '../services/product';
import Loading from './Loading';
import useStyles from './productListStyle';
import ItemStyle from './ItemStyle';
import Pagination from '@material-ui/lab/Pagination';
const ProductList = () => {

    const classes = useStyles()

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        getAllProduct()
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products?page=${page}`)
            .then(res => res.json())
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [page]);
    const onChange = (e, p) => {
        setPage(p)
    }
    return (
        <>
            {data && (
                <>
                    <Box className={classes.rame}>
                        <ItemStyle></ItemStyle>
                        <Typography>Label example</Typography>
                        <Pagination count={11} defaultPage={page} page={page} onChange={onChange} />
                    </Box>
                    <Loading isLoading={loading}>
                        <Grid container spacing={2}>
                            {data.map((el, index) => (
                                <Grid item md={3} xs={12} sm={6} key={index}>
                                    <CardItem title={data[index].title} price={data[index].price} image={data[index].image} id={data[index].id}></CardItem>
                                </Grid>
                            ))}
                        </Grid>
                        <Box className={classes.rame}>
                            <ItemStyle></ItemStyle>
                            <Typography>Label example</Typography>
                            <Pagination count={11} defaultPage={page} page={page} onChange={onChange} />
                        </Box>
                    </Loading>
                </>
            )}

        </>
    );
};

export default ProductList;