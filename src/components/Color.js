import React from 'react';
import Box from '@material-ui/core/Box';
import SideBarTitle from './SideBarTitle';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
};

const Colors = () => {
    return (
        <>
            <SideBarTitle text='Color' />
            <Box display="flex" justifyContent="flex-start">
                <Box borderRadius="50%" {...defaultProps} bgcolor='primary.main' />
                <Box borderRadius="50%" {...defaultProps} bgcolor='secondary.main' />
                <Box borderRadius="50%" {...defaultProps} bgcolor='error.main' />
                <Box borderRadius="50%" {...defaultProps} bgcolor='warning.main' />
                <Box borderRadius="50%" {...defaultProps} bgcolor='info.main' />
                <Box borderRadius="50%" {...defaultProps} bgcolor='success.main' />
            </Box>
        </>
    );
}

export default Colors;