import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    rame: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
    },
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}))

export default useStyles;
