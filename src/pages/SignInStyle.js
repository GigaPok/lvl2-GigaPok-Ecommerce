import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    root: {
        width: '100%'
    },
    item: {
        width: '50%'
    },
    title: {
        backgroundColor: '#fbfbfb',
        paddingBottom: '3rem!important',
        paddingTop: '3rem!important',
        fontWeight: '500',
        color: '#4f4f4f',
        fontSize: '1.75rem'
    }
}))