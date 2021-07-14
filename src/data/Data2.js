import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Data2 = () => {

    const [data, setData] = useState()

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
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

    console.log('data', data);

    return (
        <>
            {data && (
                <div>
                    <p>{data[0].title}</p>
                    <p>{data[0].price}</p>
                    <img src={data[0].image}></img>
                </div>
            )}
        </>
    );
};

export default Data2;