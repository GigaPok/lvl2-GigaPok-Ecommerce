import { Box, makeStyles, Typography } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import React from 'react';
import CheckboxesGroup from '../components/Checkbox';
import Review from '../components/Review';
import Search from '../components/Search';
import SideBarTitle from '../components/SideBarTitle';
import Subcategories from '../components/Subcategories';
import RangePrice from './RangePrice';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },

}));

const SideBar = () => {

    const classes = useStyles()

    return (<>
        <Subcategories />

        <SideBarTitle text='Filter' />
        <Search noshow={true} label='Search...'></Search>

        <SideBarTitle text='Condition' />
        <CheckboxesGroup
            label={"New"}
            label2={"Used"}
            label3={"Collectible"}
            label4={"Renewed"}
        />

        <Review></Review>

        <SideBarTitle text='Price' />
        <CheckboxesGroup
            label={"Under $25"}
            label2={"$25 to $50"}
            label3={"$50 to $100"}
            label4={"$100 to $200"}
            icon={<Favorite></Favorite>}
        />
        <Box className={classes.root}>
            <Search label='$ Min' noshow={false}></Search>
            <Typography>-</Typography>
            <Search label='$ Max' noshow={false}></Search>
        </Box>
        <RangePrice></RangePrice>
        <SideBarTitle text='Size' />
        <CheckboxesGroup
            label={"34"}
            label2={"36"}
            label3={"38"}
            label4={"40"}
        />

    </>
    );
};

export default SideBar;