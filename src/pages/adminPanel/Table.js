import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import useStyles from './TableStyle'
import AdminModal from './AdminModal';
import { getAllProduct } from '../../services/product';
import { CardMedia } from '@material-ui/core';
import { Single_Product } from '../../router';
import Loading from '../../components/Loading';


const BasicTable = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const classes = useStyles();

    useEffect(() => {
        setLoading(true)
        getAllProduct()
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [])

    const title = ['ID', 'Title', 'Price', 'IMG']


    return (
        <>
            {data && (
                <>
                    <Loading isLoading={loading}>
                        <AdminModal></AdminModal>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {title.map((el, index) => (
                                            <TableCell>{el}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((el, index) => {

                                        const link = Single_Product.replace(':paramId', el.id)

                                        return (
                                            <TableRow key={el.id}>
                                                <TableCell component="th" scope="row">
                                                    <Link target='_blank' className={classes.decNone} to={link}>
                                                        {data[index].id}
                                                    </Link>
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    <Link className={classes.decNone} to={link}>
                                                        {data[index].title}
                                                    </Link>
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    <Link className={classes.decNone} to={link}>
                                                        {data[index].price}
                                                    </Link>
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    <Link className={classes.decNone} to={link}>
                                                        <CardMedia className={classes.imgsize} image={data[index].image} />
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Loading>
                </>
            )
            }

        </>
    );
}

export default BasicTable;
