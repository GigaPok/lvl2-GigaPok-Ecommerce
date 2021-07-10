import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import SideBarTitle from './SideBarTitle';

const Review = () => {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Box mb={3} borderColor="transparent">
                <SideBarTitle text='Avg. Customer Review' />
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> & Up
            </Box>
            <Box mb={3} borderColor="transparent">
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> & Up
            </Box>
            <Box mb={3} borderColor="transparent">
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> & Up
            </Box>
            <Box mb={3} borderColor="transparent">
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> & Up
            </Box>
        </>
    );
}


export default Review;